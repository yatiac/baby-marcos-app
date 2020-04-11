import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "firebase/auth";
import "firebase/firestore";
import { createStore, compose, applyMiddleware } from "redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance, reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "firebase/app";
import fbConfig from "./config/fbConfig";

import rootReducer from './store/reducers/rootReducer';

import './index.css';
import App from './App';

const initState = {};

const middlewares = [thunk.withExtraArgument({ getFirestore })];

const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...middlewares), 
  reduxFirestore(firebase))
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);