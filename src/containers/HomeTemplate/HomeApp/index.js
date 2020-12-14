import React, { Component } from "react";
import Mobile from "./asset/mobile.png";
import Slide1 from "./asset/slide1.jpg";
import Slide2 from "./asset/slide2.jpg";
import Slide3 from "./asset/slide3.jpg";
import "./index.scss";
export default function index() {
    return (
        <div className="home__app">
            <div className="container">
                <div className="row">
                    <div
                        className="col-sm-12 col-md-12 col-xl-6 app__left pl-5
                  text-center"
                    >
                        <p>Ứng dụng tiện lợi dành cho</p>
                        <p>người yêu điện ảnh</p>
                        <br />
                        <p className="text__small">
                            Không chỉ đặt vé, bạn còn có thể bình luận phim,
                            chấm điểm rạp và đổi quà hấp dẫn.
                        </p>
                        <br />
                        <button>App miễn phí - Tải về ngay!</button>
                        <p>
                            TIX có hai phiên bản <a href="/">iOS</a>
                            &amp;
                            <a href="/">Android</a>
                        </p>
                    </div>
                    <div className="col-lg-6 apps__right text-center">
                        <img className="img__bg" src={Mobile} alt="" />
                        <div className="apps__carousel">
                            <div className="slick__carousel">
                                <div className="img__items">
                                    <img src={Slide1} alt="" />
                                </div>
                                <div className="img__items">
                                    <img src={Slide2} alt="" />
                                </div>
                                <div className="img__items">
                                    <img src={Slide3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
