import React from 'react'
import { Route, Redirect } from "react-router-dom";
import NavAdmin from './../../component/NavAdmin'


function LayoutAdmin(props) {
    return(
        <div>
            <NavAdmin />
            {props.children}
        </div>
    )
}

export default function AdminTemplate({Component , ...props}) {
    return (
            <Route 
            {...props}
            render={(propsComponent) => {
                return(
                    <LayoutAdmin>
                        <Component {...propsComponent} />
                    </LayoutAdmin>
                )
            }}
            />
    )
}
