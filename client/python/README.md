```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned  -Scope CurrentUser

.\.venv\Scripts\activate
```

```bash
source .\.venv\Scripts\activate
```

```python
pip install -r requirements.txt --use-pep517
```



source ./.env/bin/activate

python -m grpc_tools.protoc --proto_path=. ./Protos/card_recharge.proto --python_out=. --grpc_python_out=.
python -m grpc_tools.protoc --proto_path=. ./Protos/hotlist.proto --python_out=. --grpc_python_out=.
python -m grpc_tools.protoc --proto_path=. ./Protos/probe.proto --python_out=. --grpc_python_out=.