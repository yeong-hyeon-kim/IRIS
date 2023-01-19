import React from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 컴포넌트 가져오기
import Task from "../components/task";

let TaskContainer = () => {
  const content = useSelector((state: RootState) => state.Task.isDragging);
  return <Task isDragging={content}></Task>;
};

export default TaskContainer;
