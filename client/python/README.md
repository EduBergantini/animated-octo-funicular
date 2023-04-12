```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned  -Scope CurrentUser

.\.venv\Scripts\activate
```

```bash
source .\venv\Scripts\activate
```
```bash
source ./venv/bin/activate
```

```python
pip install -r requirements.txt --use-pep517
```

```python
python -m grpc_tools.protoc --proto_path=. ./Protos/card_recharge.proto --python_out=. --pyi_out=. --grpc_python_out=.
```
```python
python -m grpc_tools.protoc --proto_path=. ./Protos/hotlist.proto --python_out=. --pyi_out=. --grpc_python_out=.
```
```python
python -m grpc_tools.protoc --proto_path=. ./Protos/probe.proto --python_out=. --pyi_out=. --grpc_python_out=.
```





