import React, { Component } from "react";
import "./index.scss";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: [
                {
                    maPhim: 1283,
                    tenPhim: "Hallowell",
                    biDanh: "trainwreck",
                    trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
                    hinhAnh:
                        "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/s/rsz_980x448_1_1.jpg",
                    moTa:
                        "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
                    maNhom: "GP00",
                    ngayKhoiChieu: "2019-07-29T00:00:00",
                    danhGia: 5,
                },
                {
                    maPhim: 1283,
                    tenPhim: "Trainwreck",
                    biDanh: "trainwreck",
                    trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
                    hinhAnh:
                        "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980_x_449.jpg",
                    moTa:
                        "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
                    maNhom: "GP00",
                    ngayKhoiChieu: "2019-07-29T00:00:00",
                    danhGia: 5,
                },
            ],
        };
    }

    renderCarouselIndicators = (listMovie) => {
        let activeClass = "active";
        if (listMovie && listMovie.length > 0) {
            return listMovie.map((item, index) => {
                return (
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={index}
                        className={activeClass}
                        key={index}
                    />
                );
            });
        }
    };

    renderCarouselItem = (listMovie) => {
        let activeClass = "active";
        if (listMovie && listMovie.length > 0) {
            return listMovie.map((item, index) => {
                if (index === 0) {
                    return (
                        <div className={`carousel-item , ${activeClass}`}>
                            <img
                                src={item.hinhAnh}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.tenPhim}</h5>
                            </div>
                        </div>
                    );
                }
                return (
                    <div className={`carousel-item`}>
                        <img
                            src={item.hinhAnh}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{item.tenPhim}</h5>
                        </div>
                    </div>
                );
            });
        }
    };
    render() {
        const { listMovie } = this.state;
        return (
            <>
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                    style={{ marginTop: 60 }}
                >
                    <ol className="carousel-indicators">
                        {this.renderCarouselIndicators(listMovie)}
                    </ol>
                    <div className="carousel-inner ">
                        {this.renderCarouselItem(listMovie)}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div>
                    <div className="ticket">
                        <div className="container">
                            <div className="ticket__block">
                                <div className="ticket__phim border-right">
                                    <select
                                        className="custom-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option className="d-none" selected>
                                            Phim
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="ticket__phim border-right">
                                    <select
                                        className="custom-select"
                                        id="inputGroupSelect02"
                                    >
                                        <option className="d-none" selected>
                                            Rạp
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="ticket__phim border-right">
                                    <select
                                        className="custom-select"
                                        id="inputGroupSelect03"
                                    >
                                        <option className="d-none" selected>
                                            Ngày xem
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="ticket__phim border-right">
                                    <select
                                        className="custom-select"
                                        id="inputGroupSelect04"
                                    >
                                        <option className="d-none" selected>
                                            Suất chiếu
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="ticket__phim">
                                    <button className="text-white">
                                        MUA VÉ NGAY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
