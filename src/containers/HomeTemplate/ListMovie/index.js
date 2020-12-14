import React from "react";
import CarouselMovie from "./carouselMovie";
import "./index.scss";

export default function index() {
    return (
        <>
            <div className='movie-film'>
                <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            Đang chiếu
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="pills-profile-tab"
                            data-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                        >
                            Sắp chiếu
                        </a>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <div className="container">
                        <CarouselMovie />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <div className="container">
                        <CarouselMovie />
                    </div>
                </div>
            </div>
        </>
    );
}
