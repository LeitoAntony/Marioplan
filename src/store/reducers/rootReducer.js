import authReducer from './authReducer';
import projectreducer from './projectReducer';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
    auth: authReducer,
    project: projectreducer
});

export default rootreducer; 