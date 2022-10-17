import { combineReducers } from "redux";
import Home from "./home";
import Link from "./link";

const rootReducer = combineReducers({ Home, Link });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
