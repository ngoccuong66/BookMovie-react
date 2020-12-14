import React from "react";
import { Route } from "react-router-dom";
import NavHome from "../../component/NavHome";
import Footer from './../../component/Footer'
function LayoutHome(props) {
    return (
        <div>
            <NavHome />
            {props.children}
            <Footer />
        </div>
    );
}
export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    );
}
