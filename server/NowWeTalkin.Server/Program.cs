using NowWeTalkin.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<CardRechargeService>();
app.MapGrpcService<HotlistService>();
app.MapGrpcService<ProbeService>();
app.MapGet("/", () => "NOW WE TALKIN'! BABIE!!!!!");

app.Run();