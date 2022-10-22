import { delay, put, takeEvery } from "redux-saga/effects";

const SUBJECT = "home/SUBJECT" as const;
const OFFCANVAS = "home/OFFCANVAS" as const;
const ACTIVE = "home/ACTIVE" as const;
const THEME = "home/THEME" as const;

/* 액션 생성 함수 */
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

/* Redux Saga */
export const actionFuncTheme = () => ({
  type: THEME,
});

function* themeSaga() {
  // put은 특정 액션을 디스패치 해줍니다.
  yield put(actionFuncTheme());
}

export function* homeSaga() {
  // 모든 THEME 액션을 처리
  yield takeEvery(THEME, themeSaga);
}

/* 모든 액션 타입 정의 */
type actionHome =
  | ReturnType<typeof actionFuncSubject>
  | ReturnType<typeof actionFuncOffcanvas>
  | ReturnType<typeof actionFuncActive>
  | ReturnType<typeof actionFuncTheme>;

/* 리덕스 상태 타입 정의 */
type homeState = {
  subject: string;
  show: boolean;
  active: string;
};
/* 상태 초기화 */
const initState: homeState = {
  subject: "Silica Note",
  show: false,
  active: "2",
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
      return {
        subject: state.subject,
        show: state.show,
        active: (state.active = action.nav.active),
      };
    }
    case THEME: {
      console.log("Action Theme..");
      return { subject: state.subject, show: state.show, active: state.active };
    }
    default:
      return state;
  }
}

export default Home;
