import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from '../components/reducers';

export default function configureStore(initialState) {
    const store = createStore(userReducer, initialState);   
    return store;
}