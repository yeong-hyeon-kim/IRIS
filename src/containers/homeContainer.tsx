import React , { useEffect } from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import {
  actionFuncOffcanvas,
  actionFuncActive,
  actionFuncTheme,
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

  const setTheme = () => {
    dispatch(actionFuncTheme());
  };

  const defalutTheme = () =>{
    let theme = localStorage.getItem("theme");
    dispatch(actionFuncStoragedTheme(theme));
  };

  useEffect(() => {
    defalutTheme();
  }, []);

  const onOffcanvas = () => {
    dispatch(actionFuncOffcanvas());
  };

  const onActiveNavLink = (e: string) => {
    dispatch(actionFuncActive(e));
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
