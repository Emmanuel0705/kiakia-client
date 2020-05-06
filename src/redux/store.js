// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {transactionSaga} from './Sagas/transaction.saga'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,thunk];
export const store = createStore(reducers,applyMiddleware(...middlewares));
sagaMiddleware.run(transactionSaga)
export const persistor = persistStore(store)


