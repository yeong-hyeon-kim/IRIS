import { getNoticeAsync, GET_NOTICE } from "./actions";
import { getNoticeList, INotice } from "../../api/notice";
import { call, put, takeEvery } from "redux-saga/effects";

function* getNoticeSaga(action: ReturnType<typeof getNoticeAsync.request>) {
  try {
    const appNotice: INotice = yield call(getNoticeList, action.payload);

    yield put(getNoticeAsync.success(appNotice));
  } catch (e: any) {
    yield put(getNoticeAsync.failure(e));
  }
}

export function* noticeSaga() {
  yield takeEvery(GET_NOTICE, getNoticeSaga);
}
