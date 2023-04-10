const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./Protos/card_recharge.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const CardRechargeService = grpc.loadPackageDefinition(packageDefinition).operations.CardRecharge;

const client = new CardRechargeService("localhost:5240", grpc.credentials.createInsecure());

const rechargeRequest = {
  card_internal_serial_number: Math.floor(Math.random() * 90000),
  issuer_id: Math.floor(Math.random() * 99),
  card_design_id: Math.floor(Math.random() * 9),
  card_serial_number: Math.floor(Math.random() * 9999),
  application_id: Math.floor(Math.random() * 950),
  recharge_value_in_cents: Math.floor(Math.random() * 50000),
};

client.RequestRechargeUnary(rechargeRequest, (error, rechargeReply) => {
  if (error) {
    console.error(`ERROR: ${error}`);
    return;
  }
  console.log(`RESPONSE: { status = ${rechargeReply.status}, message = ${rechargeReply.message}, transaction_number = ${rechargeReply.transaction_number}; }`);
})

const serviceStream = client.RequestRechargeStream();
serviceStream.on("data", function(response) {
  console.log(`RESPONSE: { status = ${response.status}, message = ${response.message}, transaction_number = ${response.transaction_number}; }`);
});
serviceStream.on("error", function(error) {
  console.error(`ERROR: ${error}`);
});
serviceStream.on('end', function() {
  console.debug(`Closed`);
});

(async () => {
  console.log("Pressione CTRL + C para finalizar")
  while (true) {
    const rechargeRequestStream = {
      card_internal_serial_number: Math.floor(Math.random() * 90000),
      issuer_id: Math.floor(Math.random() * 99),
      card_design_id: Math.floor(Math.random() * 9),
      card_serial_number: Math.floor(Math.random() * 9999),
      application_id: Math.floor(Math.random() * 950),
      recharge_value_in_cents: Math.floor(Math.random() * 50000),
    };
    console.log(`ENVIANDO: {card_internal_serial_number: ${rechargeRequestStream.card_internal_serial_number}}`);
    serviceStream.write(rechargeRequestStream);
    console.log(`AGUARDANDO 1000 millis`);
    await Promise.resolve(setTimeout(() => {console.log("aguardando 1s.")},  1000));
  }
})();