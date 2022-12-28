/* 액션 타입 */
const ARTICLE = "introduce/Article" as const;

/* 액션 함수 */
export const actionFuncArticle = () => ({
  type: ARTICLE,
});

/* 모든 액션 타입 정의 */
type actionArticle = ReturnType<typeof actionFuncArticle>;

/* 리덕스 상태 타입 정의 */
type stateType = {
  title: string;
  content: string;
};
/* 상태 초기화 */
const initState: stateType = {
  title: "안녕하세요!👋",
  content: "지금은 개발 중이라 더 좋은 기능으로 찾아뵐께요!",
};

/* 리듀서 */
function Link(state: stateType = initState, action: actionArticle): stateType {
  switch (action.type) {
    case ARTICLE:
      return { title: state.title, content: state.content };
    default:
      return state;
  }
}

export default Link;
