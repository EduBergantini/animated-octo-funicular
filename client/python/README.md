# Iniciando o projeto
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned  -Scope CurrentUser

.\.venv\Scripts\activate
```

```bash
source ./venv/bin/activate
```

# Instalando dependencias
```python
pip install -r requirements.txt --use-pep517
```

# Gerando código de integração GRPC
```bash
. ./scripts/build_protos.sh
```
# Fallbacks
- Existe um problema quando geramos os códigos em python através do proto em uma pasta diferente daquela que os arquivos .protos se encontram. Nesse caso devemos adicionar uma clausula indicando o diretório de importação nos arquivos gerados pelo _protoc_.
- A geração de código estará assim (Conforme apresentados nas issues  [9450](https://github.com/grpc/grpc/issues/9450) e [9575](https://github.com/grpc/grpc/issues/9575)):
```python
import card_recharge_pb2 as card__recharge__pb2
```
- Devemos deixa-los assim:
```python
from . import card_recharge_pb2 as card__recharge__pb2
```