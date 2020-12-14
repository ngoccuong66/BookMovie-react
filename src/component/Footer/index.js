import React, { Component } from "react";
import "./index.scss";
import LogoCongthuong from "./asset/logo-congthuong.png";
import LogoZion from "./asset/zion-logo.jpg";
export default class index extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row support">
                        <div className="col-sm-12 col-md-1 col-xl-1 p-0 text-center">
                            <img
                                className="logo__zion"
                                src={LogoZion}
                                alt=""
                            />
                        </div>
                        <div className="col-sm-12 col-md-9 col-xl-9 support__info">
                            <p className="title__info m-0">
                                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                            </p>
                            <p className="m-0">
                                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông,
                                Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                            </p>
                            <span>
                                Giấy chứng nhận đăng ký kinh doanh số:
                                0101659783,
                            </span>
                            <span>
                                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01
                                năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ
                                Chí Minh cấp.
                            </span>
                            <p className="m-0">
                                Số Điện Thoại (Hotline): 1900 545 436
                            </p>
                            <span>Email: </span> <a href="/">support@tix.vn</a>
                        </div>
                        <div className="col-sm-12 col-md-2 col-xl-2 logo p-0">
                            <img
                                className="logo__congThuong"
                                src={LogoCongthuong}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
