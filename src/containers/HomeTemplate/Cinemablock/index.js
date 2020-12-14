import React, { useEffect, useState } from "react";
import "./index.scss";
import ListLogo from "./listLogo";
import { connect } from "react-redux";
import { actListRapApi } from "./module/action";
function CinemaBlock(props) {
    const { data } = props;
    useEffect(() => {
        props.fetchListRap();
    }, []);

    const renderLogo = (data) => {
        let activeClass = "active";
        if (data && data.length > 0) {
            return data.map((item) => {
                return (
                    <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <a
                            className={`nav-link , ${activeClass}`}
                            id="v-pills-home-tab"
                            data-toggle="pill"
                            href="#v-pills-home"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <img style={{ width: 50 }} src={item.logo} alt="" />
                        </a>
                    </div>
                );
            });
        }
    };
    const renderTable = (data) => {
        let activeClass = "active show";
        if (data && data.length > 0) {
            return data.map((item, index) => {
                if (index === 0) {
                    return (
                        <div
                            className={`tab-pane fade , ${activeClass}`}
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            {item.tenHeThongRap}
                        </div>
                    );
                }
                return (
                    <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                    >
                        {item.tenHeThongRap}
                    </div>
                );
            });
        }
    };
    console.log("dataRap", data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">{renderLogo(data)}</div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        {renderTable(data)}
                        {/* <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            2
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                        >
                            3
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                        >
                            4
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state.listRapReducer.data,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListRap: () => {
            dispatch(actListRapApi());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CinemaBlock);
