import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import SignIn from "../components/sign_in";

let SignInContainer = () => {
  return <SignIn></SignIn>;
};

export default SignInContainer;
