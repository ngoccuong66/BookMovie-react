import * as ActionType from "./constants";
import api from "./../../../../../api";

export const actListMovieApi = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest());
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((res) => {
                dispatch(actListMovieSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actListMovieFailed(err));
            });
    };
};
const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    };
};

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    };
};

const actListMovieFailed = (err) => {
    return {
        type: ActionType.LIST_MOVIE_FAILED,
        payload: err,
    };
};
