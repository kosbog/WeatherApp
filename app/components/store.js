import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import weatherReducer from '../components/reducers';

const store = createStore(
     weatherReducer,
     applyMiddleware(logger, thunk)
);

export default store;