import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ITestData } from "../mock/ITestData";
import { Test } from "../mock/TestData";

const URL = "link/URL" as const;
const LIST = "link/URL-LIST" as const;

/* 액션 함수 */
export const actionFuncURL = () => ({
  type: URL,
});

export const actionFuncLIST = () => ({
  type: LIST,
});

/* 모든 액션 타입 정의 */
type actionLink =
  | ReturnType<typeof actionFuncURL>
  | ReturnType<typeof actionFuncLIST>;

/* 리덕스 상태 타입 정의 */
type linkState = {
  url: string[];
  list: ITestData[];
};
/* 상태 초기화 */
const initState: linkState = {
  url: [""],
  list: Test,
};

/* 리듀서 */
function Link(state: linkState = initState, action: actionLink): linkState {
  switch (action.type) {
    default:
      return state;
  }
}

export default Link;
