import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Notice } from "../../api/notice";

export type NoticeAction = ActionType<typeof actions>;

export type NoticeState = {
  appNotice: {
    loading: boolean;
    error: Error | null;
    data: Notice | null;
  };
};
