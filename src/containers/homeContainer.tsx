import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import { actionFuncOffcanvas, actionFuncActive } from "../modules/home";
// 컴포넌트 가져오기
import Home from "../components/home";
import { getNoticeAsync } from "../modules/home/";

let HomeContainer = () => {
  const subject = useSelector((state: RootState) => state.Home.subject);
  const show = useSelector((state: RootState) => state.Home.show);
  const active = useSelector((state: RootState) => state.Home.active);

  // Button Action
  const dispatch = useDispatch();
  const onOffcanvas = () => {
    dispatch(actionFuncOffcanvas());
  };

  const onActiveNavLink = (e: string) => {
    dispatch(actionFuncActive(e));
    console.log("test");
    onSubmitUsername("test");
  };

  const onSubmitUsername = (username: string) => {
    dispatch(getNoticeAsync.request(username));
  };

  const { data, loading, error } = useSelector(
    (state: RootState) => state.notice.appNotice
  );

  console.log(loading, error, data);

  return (
    <Home
      subject={subject}
      onOffCanvas={onOffcanvas}
      show={show}
      onActiveNavLink={onActiveNavLink}
      active={active}
    ></Home>
  );
};

export default HomeContainer;
