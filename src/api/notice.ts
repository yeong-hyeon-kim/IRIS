import axios from "axios";
axios.defaults.withCredentials = true;

export async function getNoticeList(username: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.get<Notice>(`http://localhost:8080/notice`);
  console.log(response.data);

  // 데이터 값을 바로 반환하도록 처리합니다.
  return response.data;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  created: string;
}
