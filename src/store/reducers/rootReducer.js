// import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import diapersChangeReducer from './diapersChangeReducer';
import { combineReducers } from 'redux'
import feedingReducer from './feedingReducer';

const rootReducer =  combineReducers({
    // auth: authReducer,
    diapersChangeReducer: diapersChangeReducer,
    feedingReducer: feedingReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;