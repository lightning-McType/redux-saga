import { put, call, takeEvery } from "@redux-saga/core/effects";
import { getCatsSuccess } from "./catSlice";
import axios from "axios";

function* workGetCatsFetch() {
  const { data } = yield call(() =>
    axios.get("https://dummyjson.com/products")
  );
  yield put(getCatsSuccess(data.products));
}

export function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}
