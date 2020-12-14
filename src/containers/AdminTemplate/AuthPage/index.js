import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { actAuthApi } from "./module/action";
export default function AuthPage(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const handleChangeValue = (e) => {
        let {value , name} = e.target;
        setUser({
            ...user,
            [name] : value
        })
     
    }
    console.log(user)
   
    const handleLogin = (e) => {
        e.preventDefault();
       
        let dataUser = {...user}

        dispatch(actAuthApi(dataUser , props.history))
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6 mx-auto">
                    AuthPage
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                name="taiKhoan"
                                onChange={handleChangeValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                className="form-control"
                                name="matKhau"
                                onChange={handleChangeValue}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success"
                           
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
