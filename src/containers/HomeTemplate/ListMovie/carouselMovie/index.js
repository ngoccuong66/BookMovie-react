import React, { useEffect } from "react";
import Slider from "react-slick";
import "./index.scss";
import { connect } from "react-redux";
import { actListMovieApi } from "./module/action";
function CarouselMovie(props) {
    const { data } = props;
    useEffect(() => {
        props.fetchListMovie();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    console.log('dataListmovie' , data);

    const renderListMovie = (data) => {
        if (data && data.length > 0) {
            return data.map((item) => {
                return (
                    <div className='movie' key={item.maPhim}>
                        <div className="list__movie">
                            <div className="img-movie">
                                <img
                                    className="card-img-top"
                                    src={item.hinhAnh}
                                    alt=""
                                />
                                <div className="over__lay">
                                    <button className='btn btn-danger play-btn'>123</button>
                                </div>
                                <div className="rate">{item.danhGia}</div>
                            </div>
                           
                        </div>
                        <div className="card-body">
                            <p className="font-weight-bold name-movie">
                                <span className="bg-danger p-2 mr-2 rounded-pill">
                                    C13
                                </span>
                                {item.tenPhim}
                            </p>
                            <div className='btnBuyTicket'>
                                <button>Chi Tiet</button>
                                <button>Dat ve</button>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    };
    return (
        <div>
            <Slider {...settings}>{renderListMovie(data)}</Slider>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(actListMovieApi());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CarouselMovie);
