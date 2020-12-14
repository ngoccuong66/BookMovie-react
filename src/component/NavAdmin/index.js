import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actLogOut } from "./../../containers/AdminTemplate/AuthPage/module/action";
function NavAdmin(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(actLogOut(props.history));
    };
    return (
        <div>
            <button className="btn btn-danger" onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
}

export default withRouter(NavAdmin)