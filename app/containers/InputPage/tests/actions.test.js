import {
  INPUT_PAGE_CHANGE_INPUT,
  INPUT_PAGE_INSERT,
  INPUT_PAGE_FETCH_HISTORY,
  INPUT_PAGE_INSERTED,
  INPUT_PAGE_LOADING,
  INPUT_PAGE_ERROR,
  INPUT_PAGE_FETCHED,
} from '../constants';

import {
  changeInput,
  insertInput,
  fetchHistory,
  updateHistory,
  inputInserted,
  fetchedError,
  fetchLoading,
} from '../actions';

describe('Input Actions', () => {
  describe('changeInput', () => {
    it('should return the correct type and string to input', () => {
      const fixture = 'test';
      const expectedResult = {
        type: INPUT_PAGE_CHANGE_INPUT,
        stringToInput: fixture,
      };
      expect(changeInput(fixture)).toEqual(expectedResult);
    });
  });

  describe('insertInput', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INPUT_PAGE_INSERT,
      };
      expect(insertInput()).toEqual(expectedResult);
    });
  });

  describe('fetchHistory', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INPUT_PAGE_FETCH_HISTORY,
      };
      expect(fetchHistory()).toEqual(expectedResult);
    });
  });

  describe('updateHistory', () => {
    it('should return the correct type and the input history', () => {
      const fixture = ['hi', 'hello'];
      const expectedResult = {
        type: INPUT_PAGE_FETCHED,
        inputHistory: fixture,
      };
      expect(updateHistory(fixture)).toEqual(expectedResult);
    });
  });

  describe('inputInserted', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INPUT_PAGE_INSERTED,
      };
      expect(inputInserted()).toEqual(expectedResult);
    });
  });

  describe('fetchLoading', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INPUT_PAGE_LOADING,
      };
      expect(fetchLoading()).toEqual(expectedResult);
    });
  });

  describe('fetchedError', () => {
    it('should return the correct type and the error message', () => {
      const fixture = 'some error message';
      const expectedResult = {
        type: INPUT_PAGE_ERROR,
        error: fixture,
      };
      expect(fetchedError(fixture)).toEqual(expectedResult);
    });
  });
});
