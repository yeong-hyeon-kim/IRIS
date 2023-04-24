import React, { useEffect } from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import {
  actionFuncOffcanvas,
  actionFuncActiveNav,
  actionFuncStoragedTheme,
} from "../modules/home";
// 컴포넌트 가져오기
import Home from "../components/home";
// import { getNoticeAsync } from "../modules/home/";

let HomeContainer = () => {
  const subject = useSelector((state: RootState) => state.Home.subject);
  const show = useSelector((state: RootState) => state.Home.show);
  const active = useSelector((state: RootState) => state.Home.active);
  const theme = useSelector((state: RootState) => state.Home.theme);

  // Button Action
  const dispatch = useDispatch();

  // Set Theme
  const setTheme = () => {
    let key = "theme";
    let theme = getCookie(key);

    if (theme === "") {
      // 쿠키가 없을 때 기본 테마 설정
      setCookie(key, "light", 365);
    } else {
      if (theme === "light") {
        localStorage.setItem(key, "dark");
        setCookie(key, "dark", 365);
      } else if (theme === "dark") {
        localStorage.setItem(key, "light");
        setCookie(key, "light", 365);
      }
    }

    theme = getCookie(key);

    dispatch(actionFuncStoragedTheme(theme));
  };

  function getCookie(key: any) {
    key = new RegExp(key + "=([^;]*)"); // 쿠키들을 세미콘론으로 구분하는 정규표현식 정의
    return key.test(document.cookie) ? unescape(RegExp.$1) : ""; // 인자로 받은 키에 해당하는 키가 있으면 값을 반환
  }

  function setCookie(key: string, value: string, expiredays: number) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
    //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
    document.cookie = `${key} = ${value}; path=/; expires=${todayDate.toUTCString()}`;
  }

  const onOffcanvas = () => {
    dispatch(actionFuncOffcanvas());
  };

  const onActiveNavLink = (e: string) => {
    dispatch(actionFuncActiveNav(e));
  };

  return (
    <Home
      show={show}
      subject={subject}
      active={active}
      theme={theme.value}
      setTheme={setTheme}
      onOffCanvas={onOffcanvas}
      onActiveNavLink={onActiveNavLink}
    ></Home>
  );
};

export default HomeContainer;
