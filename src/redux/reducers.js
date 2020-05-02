// @flow

import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import componentReducer from './reducer/component.reducer';
import alertReducer from './reducer/alert.reducer';
import sessionReducer from './reducer/session.reducer';
import userReducer from './reducer/auth.reducer';
const config = {
    key:'root',
    storage:sessionStorage,
    whitelist:['user']
}
const rootReducer = combineReducers({
    component:componentReducer,
    alert:alertReducer,
    session:sessionReducer,
    user:userReducer
    
});

export default persistReducer(config,rootReducer)