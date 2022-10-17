import { combineReducers } from "redux";
import Home from "./home";
import Link from "./link";
import Introduce from "./introduce";

const rootReducer = combineReducers({ Home, Introduce, Link });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
