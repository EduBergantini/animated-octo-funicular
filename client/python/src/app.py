from integration.card_recharge_client import CardRechargeClient
from integration.hotlist_client import HotListClient
from integration.probe_client import ProbeClient

if __name__ == '__main__':
    oscar_flag = True
    while oscar_flag:
        print('SELECIONE UMA AÇÃO:')
        print('1. Enviar uma única requisição de compra de recarga.')
        print('2. Abrir um canal de comunicação de compra de recarga.')
        print('3. Obter próximo item da lista de cartões em Hotlist.')
        print('4. Abrir um canal para receber lista de cartões em Hotlist.')
        print('5. Enviar informação de geolocalização.')
        print('6. Abrir um canal para enviar informações de geolocalização.')
        print('Pressione qualquer outra tecla para finalizar.')
        key_press = input('')

        recharge_client = CardRechargeClient()
        hotlist_client = HotListClient()
        probe_client = ProbeClient()

        if key_press == '1':
            recharge_result = recharge_client.request_recharge_to_server()
            print(f'{recharge_result}')
        elif key_press == '2':
            recharge_client.request_recharge_streaming()
        elif key_press == '3':
            hotlist_request = hotlist_client.request_next_hotlist_item()
            print(f'{hotlist_request}')
        elif key_press == '4':
            hotlist_client.request_hotlist_streaming()
        elif key_press == '5':
            probe_request = probe_client.send_probe_information()
            print(f'{probe_request}')
        elif key_press == '6':
            probe_client.send_probe_information_streaming()
        else:
            oscar_flag = False
            print('Finalizado')

