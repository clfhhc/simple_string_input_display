import { put, fork, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { INPUT_PAGE_INSERT, INPUT_PAGE_FETCH_HISTORY } from '../constants';
import { fetchedError, inputInserted, updateHistory } from '../actions';
import sagas, {
  fetchIsLoading,
  requestHistoryFromServer,
  insertStringToServer,
} from '../sagas';
import { cancel } from '../../../../node_modules/redux-saga/lib/internal/io';

const stringToInput = 'test';

/* eslint-disable redux-saga/yield-effects */
describe('insertStringToServer Saga', () => {
  let insertStringToServerGenerator;
  let forkDescriptor;

  beforeEach(() => {
    insertStringToServerGenerator = insertStringToServer();

    const selectDescriptor = insertStringToServerGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    forkDescriptor = insertStringToServerGenerator.next(stringToInput).value;
    expect(forkDescriptor).toMatchSnapshot();
  });

  it('should fork fetchIsLoading generator when loading', () => {
    const mockFork = fork(fetchIsLoading);
    expect(forkDescriptor).toEqual(mockFork);
  });

  it('should dispatch the inputInserted action if it posts the data successfully', () => {
    const mockFork = fork(fetchIsLoading);
    const mockForkTask = createMockTask(mockFork);
    insertStringToServerGenerator.next(mockForkTask);
    const cancelDescriptor = insertStringToServerGenerator.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockForkTask));
    const putDescriptor = insertStringToServerGenerator.next().value;
    expect(putDescriptor).toEqual(put(inputInserted()));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const mockFork = fork(fetchIsLoading);
    const mockForkTask = createMockTask(mockFork);
    insertStringToServerGenerator.next(mockForkTask);
    const response = new Error('Some error');
    const cancelDescriptor = insertStringToServerGenerator.throw(response)
      .value;
    expect(cancelDescriptor).toEqual(put(fetchedError(response)));
  });
});

describe('insertInput Saga', () => {
  const insertInputSaga = sagas.insertInput();

  it('should start task to watch for INPUT_PAGE_INSERT action', () => {
    const takeLatestDescriptor = insertInputSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(INPUT_PAGE_INSERT, insertStringToServer),
    );
  });
});

describe('requestHistoryFromServer Saga', () => {
  let requestHistoryFromServerSaga;
  let forkDescriptor;

  beforeEach(() => {
    requestHistoryFromServerSaga = requestHistoryFromServer();

    forkDescriptor = requestHistoryFromServerSaga.next().value;
    expect(forkDescriptor).toMatchSnapshot();
  });

  it('should fork fetchIsLoading generator when loading', () => {
    const mockFork = fork(fetchIsLoading);
    expect(forkDescriptor).toEqual(mockFork);
  });

  it('should dispatch the inputInserted action if it fetches the data successfully', () => {
    const mockFork = fork(fetchIsLoading);
    const mockForkTask = createMockTask(mockFork);
    requestHistoryFromServerSaga.next(mockForkTask);
    const response = ['hi', 'hello'];
    const cancelDescriptor = requestHistoryFromServerSaga.next({
      inputHistory: response,
    }).value;
    expect(cancelDescriptor).toEqual(cancel(mockForkTask));
    const putDescriptor = requestHistoryFromServerSaga.next().value;
    expect(putDescriptor).toEqual(put(updateHistory(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const mockFork = fork(fetchIsLoading);
    const mockForkTask = createMockTask(mockFork);
    requestHistoryFromServerSaga.next(mockForkTask);
    const response = new Error('Some error');
    const cancelDescriptor = requestHistoryFromServerSaga.throw(response).value;
    expect(cancelDescriptor).toEqual(put(fetchedError(response)));
  });
});

describe('fetchHistory Saga', () => {
  const fetchHistorySaga = sagas.fetchHistory();

  it('should start task to watch for INPUT_PAGE_FETCH_HISTORY action', () => {
    const takeLatestDescriptor = fetchHistorySaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(INPUT_PAGE_FETCH_HISTORY, requestHistoryFromServer),
    );
  });
});
