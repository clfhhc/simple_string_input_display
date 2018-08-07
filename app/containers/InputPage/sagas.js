import {
  call,
  put,
  cancel,
  fork,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { serverUrl } from 'utils/constants';
import { getFromUrl, postToUrl } from './apis';
import { INPUT_PAGE_INSERT, INPUT_PAGE_FETCH_HISTORY } from './constants';
import { updateHistory, fetchLoading, fetchedError } from './actions';
import { makeSelectStringToInput } from './selectors';

const inputUrl = `${serverUrl}/input`;

export function* fetchIsLoading() {
  yield put(fetchLoading());
}

export function* requestHistoryFromServer() {
  try {
    const task = yield fork(fetchIsLoading);
    const { inputHistory } = yield call(getFromUrl, inputUrl);
    yield cancel(task);
    yield put(updateHistory(inputHistory));
  } catch (err) {
    yield put(fetchedError(err));
  }
}

export function* insertStringToServer() {
  const stringToInput = yield select(makeSelectStringToInput());
  try {
    const task = yield fork(fetchIsLoading);
    yield call(postToUrl, inputUrl, { stringToInput });
    yield cancel(task);
    // yield call(requestHistoryFromServer);
  } catch (err) {
    yield put(fetchedError(err));
  }
}

function* insertInput() {
  yield takeLatest(INPUT_PAGE_INSERT, insertStringToServer);
}

function* fetchHistory() {
  yield takeLatest(INPUT_PAGE_FETCH_HISTORY, requestHistoryFromServer);
}

export default {
  insertInput,
  fetchHistory,
};
