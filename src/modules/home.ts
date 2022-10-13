const SUBJECT = "home/SUBJECT" as const;
const SIDEBAR = "home/SIDEBAR" as const;

/* 액션 함수 */
export const actionFuncSubject = () => ({
  type: SUBJECT,
});

export const actionFuncSidebar = () => ({
  type: SIDEBAR,
});

/* 모든 액션 타입 정의 */
type actionHome =
  | ReturnType<typeof actionFuncSubject>
  | ReturnType<typeof actionFuncSidebar>;

/* 리덕스 상태 타입 정의 */
type homeState = {
  subject: string;
  style: { [key in string]: string };
};
/* 상태 초기화 */
const initState: homeState = {
  subject: "NOPI NOTE",
  style: { display: "block" },
};

/* 리듀서 */
function Home(state: homeState = initState, action: actionHome): homeState {
  switch (action.type) {
    case SUBJECT:
      return { subject: state.subject, style: state.style };
    case SIDEBAR:
      if (state.style.display === "none") {
        return {
          subject: state.subject,
          style: (state.style = { display: "block" }),
        };
      } else {
        return {
          subject: state.subject,
          style: (state.style = { display: "none" }),
        };
      }

    default:
      return state;
  }
}

export default Home;
