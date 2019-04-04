import authReducer from './authReducer';
import projectreducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootreducer = combineReducers({
    auth: authReducer,
    project: projectreducer,
    firestore: firestoreReducer
});

export default rootreducer; 