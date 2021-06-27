import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import history from '../history';
import rootReducer from './reducers';
import rootSaga from './saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

    const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, composedEnhancers);
    sagaMiddleware.run(rootSaga)
    return store;
}