import { combineReducers } from "redux";
import Home from "./home";
import Link from "./link";
import Introduce from "./introduce";
import SingIn from "./sing_in";

const rootReducer = combineReducers({ Home, Introduce, Link, SingIn });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
