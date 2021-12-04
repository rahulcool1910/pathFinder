import { RootObject, stateType } from "../actionTypes/types";
import {Node} from '../../types'
interface RespositaryState {
    loading: boolean;
    data?: RootObject;
    message?: string
}
interface initialState {
    type: stateType.search_success;
    // payload: Node[];
}
interface successState {
    type: stateType.start_search;
    payload: RootObject;
}
interface errorState {
    type: stateType.search_error;
    payload: Node[];
}



type Action = initialState | successState | errorState;



const initialState: RespositaryState = {
    loading: true,
}

const RepositoryReduces = (
    state: RespositaryState = initialState,
    action: | initialState | successState | errorState
): RespositaryState => {
    switch (action.type) {

        default:
            return state;
    }
};
export default RepositoryReduces;