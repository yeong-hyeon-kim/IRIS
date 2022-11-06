import { createReducer } from "typesafe-actions";
import { NoticeState, NoticeAction } from "./types";
import { GET_NOTICE, GET_NOTICE_SUCCESS, GET_NOTICE_ERROR } from "./actions";

// State 초기화
const initialState: NoticeState = {
  appNotice: {
    loading: false,
    error: null,
    data: null,
  },
};

const notice = createReducer<NoticeState, NoticeAction>(initialState, {
  [GET_NOTICE]: (state) => ({
    ...state,
    appNotice: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_NOTICE_SUCCESS]: (state, action) => ({
    ...state,
    appNotice: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_NOTICE_ERROR]: (state, action) => ({
    ...state,
    appNotice: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default notice;
