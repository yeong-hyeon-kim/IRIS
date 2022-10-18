import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import { actionFuncArticle } from "../modules/introduce";
// 컴포넌트 가져오기
import Introduce from "../components/introduce";
let IntroduceContainer = () => {
  // 상태 조회
  const title = useSelector((state: RootState) => state.Introduce.title);
  const content = useSelector((state: RootState) => state.Introduce.content);

  return <Introduce title={title} content={content}></Introduce>;
};

export default IntroduceContainer;
