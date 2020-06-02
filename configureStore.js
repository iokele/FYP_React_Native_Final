import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from './Reducers/Index';
import {registerWithMiddleware} from './Sagas/rootSaga';

const  sagaMiddleware=createSagaMiddleware();
const loggerMiddleware=createLogger();

export default function configureStore(preloadedState){
    const store=createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(sagaMiddleware,loggerMiddleware),
    )

    registerWithMiddleware(sagaMiddleware,store)
    return store
}