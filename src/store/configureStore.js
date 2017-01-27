import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gitStarsApp from '../gitStarsApp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(gitStarsApp, composeEnhancers(applyMiddleware(thunk)));

export default store;