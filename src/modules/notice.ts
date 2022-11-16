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
  title: string;
  content: string;
};

/* 상태 초기화 */
const initState: stateType = {
  title: "안녕하세요!",
  content: "지금은 개발 중이라 더 좋은 기능으로 찾아뵐께요!",
};

/* 리듀서 */
function Link(state: stateType = initState, action: actionNotice): stateType {
  switch (action.type) {
    case NOTICE:
      return { title: state.title, content: state.content };
    default:
      return state;
  }
}

export default Link;
