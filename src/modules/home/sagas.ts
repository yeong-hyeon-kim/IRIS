import { getNoticeAsync, GET_NOTICE } from "./actions";
import { getNoticeList, Notice } from "../../api/notice";
import { call, put, takeEvery } from "redux-saga/effects";

function* getNoticeSaga(action: ReturnType<typeof getNoticeAsync.request>) {
  try {
    const appNotice: Notice = yield call(getNoticeList, action.payload);

    console.log(appNotice);

    yield put(getNoticeAsync.success(appNotice));
  } catch (e: any) {
    yield put(getNoticeAsync.failure(e));
  }
}

export function* noticeSaga() {
  yield takeEvery(GET_NOTICE, getNoticeSaga);
}
