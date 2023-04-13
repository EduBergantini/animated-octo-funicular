import signal

from integration.card_recharge_client import CardRechargeClient

if __name__ == '__main__':
    print('SELECIONE UMA AÇÃO:')
    print('1. Enviar uma única requisição de compra de recarga.')
    print('2. Abrir um canal de comunicação de compra de recarga.')
    print('3. Obter próximo item da lista de cartões em Hotlist.')
    print('4. Abrir um canal para receber lista de cartões em Hotlist.')
    print('5. Enviar informação de geolocalização.')
    print('6. Abrir um canal para enviar informações de geolocalização.')
    print('Pressione qualquer outra tecla para finalizar.')
    key_press = input('')

    client = CardRechargeClient()

    if key_press == '1':
        result = client.request_recharge_to_server()
        print(f'{result}')
    elif key_press == '2':
        client.request_recharge_streaming()
    else:
        print('Finalizado')

