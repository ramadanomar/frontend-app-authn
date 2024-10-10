```python
from tutormfe.hooks import MFE_APPS
from tutor import hooks


@MFE_APPS.add()
def _add_my_mfe(mfes):
    mfes["authn"] = {
        "repository": "https://github.com/ramadanomar/frontend-app-authn",
        "port": 2001
    }
    return mfes
```
