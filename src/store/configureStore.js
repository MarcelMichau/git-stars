import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gitStarsApp from '../gitStarsApp';

let store = createStore(gitStarsApp, applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;