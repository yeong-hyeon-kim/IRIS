import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import Link from "../components/link";

let LinkContainer = () => {
  const LinkList = useSelector((state: RootState) => state.Link.list);
  const container = useSelector(
    (state: RootState) => state.Home.theme_container
  );

  return <Link list={LinkList} theme_container={container}></Link>;
};

export default LinkContainer;
