/* 액션 타입 */
const TASK = "TodoList/Task" as const;

/* 액션 함수 */
export const actionFuncTask = () => ({
  type: TASK,
});

/* 모든 액션 타입 정의 */
type actionTask = ReturnType<typeof actionFuncTask>;

/* 리덕스 상태 타입 정의 */
type stateType = {
  title: string;
  content: string;
};
/* 상태 초기화 */
const initState: stateType = {
  title: "Front-End",
  content: "REACT TypeScript",
};

/* 리듀서 */
function Task(state: stateType = initState, action: actionTask): stateType {
  switch (action.type) {
    case TASK:
      return { title: state.title, content: state.content };
    default:
      return state;
  }
}

export default Task;
