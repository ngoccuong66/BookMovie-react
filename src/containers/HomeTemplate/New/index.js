import React, { Component } from "react";
import "./index.scss";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTitle: [
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg",
                    title:
                        "“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành",
                    description:
                        "Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng! ",
                },
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png",
                    title:
                        "Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu ",
                    description:
                        "Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. ",
                },
            ],
            listTitleDesc: [
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png",
                    title:
                        "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
                },
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png",
                    title:
                        "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn",
                },
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png",
                    title:
                        "6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood",
                },
                {
                    hinhAnh:
                        "https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png",
                    title:
                        " Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch",
                },
            ],
        };
    }
    renderListTitle = (listTitle) => {
        if (listTitle) {
            return listTitle.map((item, index) => {
                return (
                    <div className="col-sm-12 col-md-6 col-xl-6 room__item">
                        <img
                            src={item.hinhAnh}
                            alt=""
                            style={{ height: 200 }}
                            className="img-fluid"
                        />
                        <p className="title__film1">{item.title}</p>
                        <p className="title__film2">{item.description}</p>
                        <span className="mr-3">
                            <i className="fa fa-thumbs-up" />1
                        </span>
                        <span>
                            <i className="fa fa-comment-alt =''" />1
                        </span>
                    </div>
                );
            });
        }
    };

    renderListTitleDesc = (listTitle) => {
        if (listTitle) {
            return listTitle.map((item, index) => {
                return (
                    <div className="col-sm-12 col-md-4 col-xl-4 new__item">
                        <img
                            src={item.hinhAnh}
                            alt=""
                            style={{ height: 200 }}
                            className="img-fluid"
                        />
                        <p className="item__title">{item.title}</p>
                        <p className="item__title2">{item.description}</p>
                        <span className="mr-3">
                            <i className="fa fa-thumbs-up" />1
                        </span>
                        <span>
                            <i className="fa fa-comment-alt =''" />1
                        </span>
                    </div>
                );
            });
        }
    };
    renderTitleRight = (listTitleDesc) => {
        if (listTitleDesc) {
            return listTitleDesc.map((item, index) => {
                return (
                    <div className="row room__item" key={index}>
                        <div className="col-sm-2 col-md-3 col-xl-3 mb-2">
                            <img src={item.hinhAnh} alt="" />
                        </div>
                        <div className="col-sm-9 col-md-9 col-xl-9 pl-0">
                            <p>{item.title}</p>
                        </div>
                    </div>
                );
            });
        }
    };
    render() {
        const { listTitle, listTitleDesc } = this.state;
        return (
            <div className="room__film">
                <div className="block"></div>
                <div className="container">
                    <h2>Điện Ảnh 24h</h2>
                    <div className="row ">
                        {this.renderListTitle(listTitle)}
                    </div>
                </div>
                <div className="container">
                    <div className="row room__new">
                        {this.renderListTitleDesc(listTitle)}

                        <div className="col-sm-12 col-md-4 col-xl-4 new__right">
                            {this.renderTitleRight(listTitleDesc)}
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5 mb-5">
                    <button type="button" className="btn btn-outline-danger">
                        XEM THÊM
                    </button>
                </div>
            </div>
        );
    }
}
