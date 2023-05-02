import React, { useEffect } from "react";
// 상태 조회, 디스패쳐 발생 모듈
import { useSelector, useDispatch } from "react-redux";
// 루트 리듀서 가져오기
import { RootState } from "../modules";
// 액션 함수 가져오기
import Notice from "../components/notice";
// import { getNoticeAsync } from "../modules/home/";

let NoticeContainer = () => {
  // const { data, loading, error } = useSelector(
  //   (state: RootState) => state.notice.appNotice
  // );

  // const dispatch = useDispatch();

  // const onSubmitUsername = (username: string) => {
  //   dispatch(getNoticeAsync.request(username));
  // };

  // useEffect(() => {
  //   onSubmitUsername("TEST");
  // }, []);

  // if (data === undefined || data === null) {
  //   return <Notice id={""} title={""} content={""} createDt={""}></Notice>;
  // } else {
  //   let KeyDatas = Object.values(data)[0];
  //   return (
  //     <Notice
  //       id={KeyDatas.id}
  //       title={KeyDatas.title}
  //       content={KeyDatas.content}
  //       createDt={KeyDatas.createDt}
  //     ></Notice>
  //   );
  // }

  const NoticeList = useSelector((state: RootState) => state.Notice.list);
  const container = useSelector(
    (state: RootState) => state.Home.theme_container
  );

  return (
    <Notice
      id={NoticeList[0].id}
      title={NoticeList[0].title}
      content={NoticeList[0].content}
      createDt={NoticeList[0].createDt}
      theme_container={container}
    ></Notice>
  );
};

export default NoticeContainer;
