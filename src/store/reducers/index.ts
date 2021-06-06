
import { TypedUseSelectorHook } from "react-redux";
import { combineReducers } from "redux";
import RepositoryReduces from "./RepositoryReducers";


const reducers = combineReducers({
    Repository: RepositoryReduces
})

export default reducers;

export type rootState = ReturnType<typeof reducers>;



