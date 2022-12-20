import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import posts from './posts';

 const reducers = combineReducers({ posts });
 const store = createStore(reducers, compose(applyMiddleware(thunk)));
 export default store