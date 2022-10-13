import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import { actionFuncSubject, actionFuncSidebar } from "../modules/home";
// 컴포넌트 가져오기
import Home from "../components/home";

let HomeContainer = () => {
  const subject = useSelector((state: RootState) => state.Home.subject);
  const style = useSelector((state: RootState) => state.Home.style);

  // Button Action
  const dispatch = useDispatch();
  const onSidebar = () => {
    dispatch(actionFuncSidebar());
  };

  return <Home subject={subject} onSidebar={onSidebar} style={style}></Home>;
};

export default HomeContainer;
