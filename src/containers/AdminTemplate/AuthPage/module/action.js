import * as ActionType from "./constants";
import api from "./../../../../api";

export const actAuthApi = (user, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then((res) => {
                console.log("dang nhap thanh cong", res);
                dispatch(actAuthSuccess(res.data));
                if (res.data.maLoaiNguoiDung === "QuanTri") {
                    // luu localStore

                    localStorage.setItem("userAdmin", JSON.stringify(res.data));

                    history.replace("/dashboard");
                }
            })
            .catch((err) => {
                console.log("dang nhap that bai");
                dispatch(actAuthFailed(err));
            });
    };
};

export const actLogOut = (history) => {
    localStorage.removeItem("userAdmin");
    history.replace("/auth");
    return {
        type: ActionType.CLEART_DATA_AUTH,
    };
};

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    };
};
const actAuthFailed = (err) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: err,
    };
};
