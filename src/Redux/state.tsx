import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import Reducer, {IMyState} from "./Reducer";

export interface IAppStore {
    partStore: IMyState
}

const CombineReducer = combineReducers({
    partStore: Reducer,
});

const store = createStore(CombineReducer, applyMiddleware(thunkMiddleware));
export default store;