import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMovie/carouselMovie/module/reduce";
import authReducer from "./../../containers/AdminTemplate/AuthPage/module/reducer";
import listRapReducer from "./../../containers/HomeTemplate/Cinemablock/module/reducer";
const rootReducer = combineReducers({
    listMovieReducer,
    authReducer,
    listRapReducer,
});
export default rootReducer;
