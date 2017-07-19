import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from '../components/reducers';

const store = createStore(
     userReducer,
     applyMiddleware(thunk)
);

export default store;