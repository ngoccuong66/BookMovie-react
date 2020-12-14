import React from "react";
import { routerHome, routerAdmin } from "./routers";
import PageNotFound from "./containers/PageNotFound";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from './containers/AdminTemplate/AuthPage'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    const renderHomeTemplate = (routerHome) => {
        if (routerHome && routerHome.length > 0) {
            return routerHome.map((item, index) => {
                return (
                    <HomeTemplate
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        Component={item.component}
                    />
                );
            });
        }
    };

    const renderAdminTemplate = (routerAdmin) => {
        if (routerAdmin && routerAdmin.length > 0) {
            return routerAdmin.map((item, index) => {
                return (
                    <AdminTemplate
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        Component={item.component}
                    />
                );
            });
        }
    };

    return (
        <BrowserRouter>
            <Switch>
                {renderAdminTemplate(routerAdmin)}
                {renderHomeTemplate(routerHome)}
                <Route path='/auth' component={AuthPage} />
                <Route path="" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;
