import {
  lightTheme,
  lightContainerTheme,
  darkContainerTheme,
  darkTheme,
  ITheme,
} from "../style/componets/theme";

/* 액션 타입 */
const SUBJECT = "home/SUBJECT" as const;
const OFFCANVAS = "home/OFFCANVAS" as const;
const ACTIVE_NAV = "home/ACTIVE_NAV" as const;
const THEME = "home/THEME" as const;
const THEME_CONTAINER = "home/THEME_CONTAINER" as const;

/* 액션 생성 함수 */
export const actionFuncSubject = () => ({
  type: SUBJECT,
});

export const actionFuncOffcanvas = () => ({
  type: OFFCANVAS,
});

export const actionFuncActiveNav = (e: string) => ({
  type: ACTIVE_NAV,
  nav: {
    active: e,
  },
});

/* Redux Saga */
export const actionFuncTheme = () => ({
  type: THEME,
  storaged: null,
});

export const actionFuncStoragedTheme = (theme: string | null) => ({
  type: THEME,
  storaged: theme,
});

export const actionFuncStoragedContainerTheme = (theme: string | null) => ({
  type: THEME_CONTAINER,
  storaged: theme,
});

/* 모든 액션 타입 정의 */
type actionHome =
  | ReturnType<typeof actionFuncSubject>
  | ReturnType<typeof actionFuncOffcanvas>
  | ReturnType<typeof actionFuncActiveNav>
  | ReturnType<typeof actionFuncTheme>
  | ReturnType<typeof actionFuncStoragedTheme>
  | ReturnType<typeof actionFuncStoragedContainerTheme>;

/* 리덕스 상태 타입 정의 */
type homeState = {
  subject: string;
  show: boolean;
  active: string;
  theme: ITheme;
  theme_container: ITheme;
};

/* 상태 초기화 */

const initState: homeState = {
  subject: "IRIS",
  show: false,
  active: "2",
  theme: localStorage.getItem("theme") === "light" ? lightTheme : darkTheme,
  theme_container:
    localStorage.getItem("theme") === "light"
      ? lightContainerTheme
      : darkContainerTheme,
};

/* 리듀서 */
function Home(state: homeState = initState, action: actionHome): homeState {
  let MainTheme = state.theme.value === "light" ? lightTheme : darkTheme;
  let ContainerTheme =
    state.theme.value === "light" ? lightContainerTheme : darkContainerTheme;

  switch (action.type) {
    case SUBJECT:
      return {
        subject: state.subject,
        show: state.show,
        active: state.active,
        theme: state.theme,
        theme_container: state.theme_container,
      };
    case OFFCANVAS: {
      if (state.show === false) {
        return {
          subject: state.subject,
          show: (state.show = true),
          active: state.active,
          theme: state.theme,
          theme_container: state.theme_container,
        };
      } else {
        return {
          subject: state.subject,
          show: (state.show = false),
          active: state.active,
          theme: state.theme,
          theme_container: state.theme_container,
        };
      }
    }
    case ACTIVE_NAV: {
      return {
        subject: state.subject,
        show: state.show,
        active: (state.active = action.nav.active),
        theme: state.theme,
        theme_container: state.theme_container,
      };
    }
    case THEME: {
      if (action.storaged !== null) {
        // 다크 & 라이트 테마 설정
        if (action.storaged === "light") {
          MainTheme = lightTheme;
          ContainerTheme = lightContainerTheme;
        } else if (action.storaged === "dark") {
          MainTheme = darkTheme;
          ContainerTheme = darkContainerTheme;
        }
      }

      console.log("Main Theme...", state.theme, MainTheme);
      console.log("Container Theme...", state.theme_container, ContainerTheme);

      return {
        subject: state.subject,
        show: state.show,
        active: state.active,
        theme: (state.theme = MainTheme),
        theme_container: (state.theme_container = ContainerTheme),
      };
    }
    default:
      return state;
  }
}

export default Home;
