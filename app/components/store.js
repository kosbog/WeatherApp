import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import testReducer from '../components/reducers';

const initialState = {
    name: "John"
}

const store = createStore(
    testReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;