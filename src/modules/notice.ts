import { INotice } from "../api/notice";
import { Test } from "../mock/NoticeData";

/* 액션 타입 */
const NOTICE = "notice/List" as const;

/* 액션 함수 */
export const actionFuncNotice = () => ({
  type: NOTICE,
});

/* 모든 액션 타입 정의 */
type actionNotice = ReturnType<typeof actionFuncNotice>;

/* 리덕스 상태 타입 정의 */
type stateType = {
  list: INotice[],
};

/* 상태 초기화 */
const initState: stateType = {
  list: Test,
};

/* 리듀서 */
function Notice(state: stateType = initState, action: actionNotice): stateType {
  switch (action.type) {
    default:
      return state;
  }
}

export default Notice;
