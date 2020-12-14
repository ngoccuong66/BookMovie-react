import * as ActionType from "./constants";

let initialState = {
    loading: true,
    data: null,
    err: null,
};
const listRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_RAP_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LIST_RAP_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.LIST_RAP_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
};
export default listRapReducer;
