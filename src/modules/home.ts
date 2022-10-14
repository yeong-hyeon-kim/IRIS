const SUBJECT = "home/SUBJECT" as const;
const OFFCANVAS = "home/OFFCANVAS" as const;
const ACTIVE = "home/ACTIVE" as const;

/* 액션 함수 */
export const actionFuncSubject = () => ({
  type: SUBJECT,
});

export const actionFuncOffcanvas = () => ({
  type: OFFCANVAS,
});

export const actionFuncActive = (e: string) => ({
  type: ACTIVE,
  nav: {
    active: e,
  },
});

/* 모든 액션 타입 정의 */
type actionHome =
  | ReturnType<typeof actionFuncSubject>
  | ReturnType<typeof actionFuncOffcanvas>
  | ReturnType<typeof actionFuncActive>;

/* 리덕스 상태 타입 정의 */
type homeState = {
  subject: string;
  show: boolean;
  active: string;
};
/* 상태 초기화 */
const initState: homeState = {
  subject: "NOTE",
  show: false,
  active: "1",
};

/* 리듀서 */
function Home(state: homeState = initState, action: actionHome): homeState {
  switch (action.type) {
    case SUBJECT:
      return { subject: state.subject, show: state.show, active: state.active };
    case OFFCANVAS: {
      if (state.show === false) {
        return {
          subject: state.subject,
          show: (state.show = true),
          active: state.active,
        };
      } else {
        return {
          subject: state.subject,
          show: (state.show = false),
          active: state.active,
        };
      }
    }
    case ACTIVE: {
      console.log(state);
      return {
        subject: state.subject,
        show: state.show,
        active: (state.active = action.nav.active),
      };
    }
    default:
      return state;
  }
}

export default Home;
