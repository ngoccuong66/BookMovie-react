import React from "react";
import "./index.scss";
import Logo from "./asset/logo.png";
import Location from "./asset/location.png";
import { NavLink } from "react-router-dom";
export default function index() {
    return (
        <>
            <div className="nav__menu">
                <img className="logo" src={Logo} alt="logo" />
                <div className="menu__center">
                    <NavLink to="/home">Lịch Chiếu</NavLink>
                    <NavLink to="/">Cụm rạp</NavLink>
                    <NavLink to="/">Tin Tức</NavLink>
                    <NavLink to="/">Ứng dụng</NavLink>
                </div>
                <div className="menu__right">
                    <NavLink to="/auth" className="login border-right">
                        <img src={Location} alt="avatar" />
                        <p>Đăng Nhập</p>
                    </NavLink>
                    <a href="/" className="location">
                        <img src="" alt="" />
                        <p>Hồ Chí Minh</p>
                    </a>
                </div>
            </div>
        </>
    );
}
