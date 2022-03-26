import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

let middlewares = applyMiddleware(thunk)

const composeEnhancers = composeWithDevTools({})
middlewares = composeEnhancers(middlewares)

const store = createStore(rootReducer, middlewares);

export default store;