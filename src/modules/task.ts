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
  isDragging: boolean
};
/* 상태 초기화 */
const initState: stateType = {
  isDragging: true,
};

/* 리듀서 */
function Task(state: stateType = initState, action: actionTask): stateType {
  switch (action.type) {
    case TASK:
      return { isDragging: true};
    default:
      return state;
  }
}

export default Task;
