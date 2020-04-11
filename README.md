# BABY MARCOS APP

Esta pequeña app la cree para registrar cosas de Marcos Rafael.

Usé `create-react-app` como template de React y `Firebase` para hosting y base de datos

Para usarla debes clonar este repositorio y agregar un archivo `fbConfig.js` en `src/config` con la siguiente informacion:

```
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: <APIKIET>,
  authDomain: <AUTH DOMAIN>,
  databaseURL: <DATABASE URL>, 
  projectId: <PROJECT ID>,
  storageBucket: <STORAGE BUCKET>,
  messagingSenderId: <MESSAGING SENDER ID>,
  appId: <APPID>"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
```
Todo esto te lo da firebase cuando agregas un app a tu proyecto.


## TODO
 
- [ ] Agregar Login
- [ ] Registrar Vacunas
- [ ] Registrar idas al médico