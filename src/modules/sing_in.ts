const URL = "link/URL" as const;

/* 액션 함수 */
export const actionFuncURL = () => ({
  type: URL,
});

/* 모든 액션 타입 정의 */
type actionLink = ReturnType<typeof actionFuncURL>;

/* 리덕스 상태 타입 정의 */
type typeState = {
  url: string[];
};
/* 상태 초기화 */
const initState: typeState = {
  url: [""],
};

/* 리듀서 */
function SingIn(state: typeState = initState, action: actionLink): typeState {
  switch (action.type) {
    default:
      return state;
  }
}

export default SingIn;
