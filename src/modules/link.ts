const URL = "link/URL" as const;

/* 액션 함수 */
export const actionFuncURL = () => ({
  type: URL,
});

/* 모든 액션 타입 정의 */
type actionLink = ReturnType<typeof actionFuncURL>;

/* 리덕스 상태 타입 정의 */
type linkState = {
  url: string[];
};
/* 상태 초기화 */
const initState: linkState = {
  url: [""],
};

/* 리듀서 */
function Link(state: linkState = initState, action: actionLink): linkState {
  switch (action.type) {
    default:
      return state;
  }
}

export default Link;
