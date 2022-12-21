/* 액션 타입 */
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
  storaged: null
});

export const actionFuncStoragedTheme = (theme: string | null) => ({
  type: THEME,
  storaged: theme
});

// 컨테이너에서 호출
// function* themeSaga() {
//   // put은 특정 액션을 디스패치 해줍니다.
//   yield put(actionFuncTheme());
// }

// export function* homeSaga() {
//   // 모든 THEME 액션을 처리
//   yield takeEvery(THEME, themeSaga);
// }

/* 모든 액션 타입 정의 */
type actionHome =
  | ReturnType<typeof actionFuncSubject>
  | ReturnType<typeof actionFuncOffcanvas>
  | ReturnType<typeof actionFuncActive>
  | ReturnType<typeof actionFuncTheme>
  | ReturnType<typeof actionFuncStoragedTheme>;

/* 리덕스 상태 타입 정의 */
type homeState = {
  subject: string;
  show: boolean;
  active: string;
  theme: {
    value: string;
    style: {
      backgroundColor: string;
      color: string;
    };
  };
};

const lightTheme = {
  value: "light",
  style: {
    backgroundColor: "#ffffff",
    color: "#343a40",
  },
};

const darkTheme = {
  value: "dark",
  style: {
    backgroundColor: "#343a40",
    color: "#ffffff",
  },
};

/* 상태 초기화 */
const initState: homeState = {
  subject: "Silica Note",
  show: false,
  active: "2",
  theme: lightTheme,
};

/* 리듀서 */
function Home(state: homeState = initState, action: actionHome): homeState {
  let MainTheme = state.theme.value === "light" ? darkTheme : lightTheme;
  // let DefaultTheme = 

  switch (action.type) {
    case SUBJECT:
      return {
        subject: state.subject,
        show: state.show,
        active: state.active,
        theme: state.theme,
      };
    case OFFCANVAS: {
      if (state.show === false) {
        return {
          subject: state.subject,
          show: (state.show = true),
          active: state.active,
          theme: state.theme,
        };
      } else {
        return {
          subject: state.subject,
          show: (state.show = false),
          active: state.active,
          theme: state.theme,
        };
      }
    }
    case ACTIVE: {
      return {
        subject: state.subject,
        show: state.show,
        active: (state.active = action.nav.active),
        theme: state.theme,
      };
    }
    case THEME: {
      if (action.storaged !== null) {
        if (action.storaged === "light") {
          MainTheme = darkTheme
        } else if(action.storaged === "dark") {
          MainTheme = lightTheme
        }
      }

      console.log("Action Theme..", state.theme, MainTheme);

      return {
        subject: state.subject,
        show: state.show,
        active: state.active,
        theme: (state.theme = MainTheme),
      };
    }
    default:
      return state;
  }
}

export default Home;
