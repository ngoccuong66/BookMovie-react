import HomePage from "./../containers/HomeTemplate/HomePage";
import DashboardPage from './../containers/AdminTemplate/DashboardPage'
const routerHome =  [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/home",
        component: HomePage,
    },
];

const routerAdmin = [
    {
        exact: true,
        path: '/dashboard',
        component: DashboardPage,
    }
]

export { routerHome , routerAdmin};
