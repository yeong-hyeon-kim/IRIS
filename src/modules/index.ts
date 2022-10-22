import { combineReducers } from "redux";
import Home,{ homeSaga }  from "./home";
import Link from "./link";
import Introduce from "./introduce";
import SingIn from "./sing_in";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ Home, Introduce, Link, SingIn });

// 루트 리듀서 내보내기
export default rootReducer;

// 루트 리듀서 반환 값 유추하기 위한 타입 정의하기
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([homeSaga()]);
  }
  