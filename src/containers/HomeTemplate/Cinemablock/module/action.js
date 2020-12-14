import * as ActionType from "./constants";
import api from "./../../../../api";

export const actListRapApi = () => {
    return (dispatch) => {
        dispatch(actListRapRequest());
        api.get("/QuanLyRap/LayThongTinHeThongRap")
            .then((res) => {
                console.log('res.data',res.data)
                dispatch(actListRapSuccess(res.data));
               
            })
            .catch((err) => {
                dispatch(actListRapFailed(err));
            });
    };
};

const actListRapRequest = () => {
    return {
        type: ActionType.LIST_RAP_REQUEST,
    };
};

const actListRapSuccess = (data) => {
    return {
        type: ActionType.LIST_RAP_SUCCESS,
        payload: data,
    };
};

const actListRapFailed = (err) => {
    return {
        type: ActionType.LIST_RAP_REQUEST,
        payload: err,
    };
};
