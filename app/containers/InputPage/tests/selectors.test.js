import { fromJS } from 'immutable';

import {
  selectInput,
  makeSelectStringToInput,
  makeSelectInputHistory,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

describe('selectInput', () => {
  it('should select the input state', () => {
    const inputState = fromJS({});
    const mockedState = fromJS({
      input: inputState,
    });
    expect(selectInput(mockedState)).toEqual(inputState);
  });
});

describe('makeSelectStringToInput', () => {
  it('should select the current string', () => {
    const stringToInput = 'hi';
    const mockedState = fromJS({
      input: {
        stringToInput,
      },
    });
    expect(makeSelectStringToInput()(mockedState)).toEqual(stringToInput);
  });
});

describe('makeSelectInputHistory', () => {
  it('should select the input history', () => {
    const inputHistory = ['hi', 'hello'];
    const mockedState = fromJS({
      input: {
        inputHistory,
      },
    });
    expect(makeSelectInputHistory()(mockedState)).toEqual(inputHistory);
  });
});

describe('makeSelectLoading', () => {
  it('should select the loading state', () => {
    const loading = true;
    const mockedState = fromJS({
      input: {
        loading,
      },
    });
    expect(makeSelectLoading()(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  it('should select the error', () => {
    const error = 'some error message';
    const mockedState = fromJS({
      input: {
        error,
      },
    });
    expect(makeSelectError()(mockedState)).toEqual(error);
  });
});
