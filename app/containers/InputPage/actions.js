import {
  INPUT_PAGE_CHANGE_INPUT,
  INPUT_PAGE_INSERT,
  INPUT_PAGE_FETCH_HISTORY,
  INPUT_PAGE_FETCHED,
  INPUT_PAGE_INSERTED,
  INPUT_PAGE_ERROR,
  INPUT_PAGE_LOADING,
} from './constants';

export function changeInput(stringToInput) {
  return {
    type: INPUT_PAGE_CHANGE_INPUT,
    stringToInput,
  };
}

export function insertInput() {
  return {
    type: INPUT_PAGE_INSERT,
  };
}

export function fetchHistory() {
  return {
    type: INPUT_PAGE_FETCH_HISTORY,
  };
}

export function updateHistory(inputHistory) {
  return {
    type: INPUT_PAGE_FETCHED,
    inputHistory,
  };
}

export function inputInserted() {
  return {
    type: INPUT_PAGE_INSERTED,
  };
}

export function fetchedError(error) {
  return {
    type: INPUT_PAGE_ERROR,
    error,
  };
}

export function fetchLoading() {
  return {
    type: INPUT_PAGE_LOADING,
  };
}
