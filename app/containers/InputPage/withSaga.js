import injectSaga from 'utils/injectSaga';
import sagas from './sagas';

export const withInsertInput = injectSaga({
  key: 'insertInput',
  saga: sagas.insertInput,
});

export const withFetchHistory = injectSaga({
  key: 'fetchHistory',
  saga: sagas.fetchHistory,
});
