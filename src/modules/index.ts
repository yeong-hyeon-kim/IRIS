import { combineReducers } from "redux";
import Introduce from "./introduce";
import Home from "./home";
import Link from "./link";
import Notice from "./notice";
import Task from "./task";
import NoticeReducerSaga from "../modules/home/reducer";
import SingIn from "./sing_in";
import { NoticeSaga } from "../modules/home/";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  Home,
  Introduce,
  Link,
  Notice,
  SingIn,
  Task,
  NoticeReducerSaga,
});

// 루트 리듀서 내보내기
export default rootReducer;

// 루트 리듀서 반환 값 유추하기 위한 타입 정의하기
export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
  yield all([NoticeSaga()]);
}
