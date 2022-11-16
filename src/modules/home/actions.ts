import { createAsyncAction } from "typesafe-actions";
// API Type
import { INotice } from "../../api/notice";
import { AxiosError } from "axios";

/* 액션 타입 */
export const GET_NOTICE = "notice/GET_NOTICE";
export const GET_NOTICE_SUCCESS = "notice/GET_NOTICE_SUCCESS";
export const GET_NOTICE_ERROR = "notice/GET_NOTICE_ERROR";

export const getNoticeAsync = createAsyncAction(
  GET_NOTICE,
  GET_NOTICE_SUCCESS,
  GET_NOTICE_ERROR
)<string, INotice, AxiosError>();
