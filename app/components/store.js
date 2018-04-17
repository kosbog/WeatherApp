import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import weatherReducer from '../reducers/reducers';

const store = createStore(
     weatherReducer,
     applyMiddleware(thunk)
);

export default store;