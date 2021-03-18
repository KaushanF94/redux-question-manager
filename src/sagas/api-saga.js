import { takeEvery, call, put } from "redux-saga/effects";
import { API_HOST,API_KEY } from "../constants/action-types";
import  unirest from "unirest"
// let unirest = require("unirest");

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getQuestionData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getQuestionData() {
  return unirest.get('https://questionmanager.p.rapidapi.com/tableData')
  .headers({ "x-rapidapi-host": API_HOST,
  "x-rapidapi-key": API_KEY,
  "useQueryString": true})
  .send()
  .then((response) => {
    return response.body.data;
  });
}
