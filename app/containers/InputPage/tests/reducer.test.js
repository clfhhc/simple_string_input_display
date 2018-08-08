import { fromJS } from 'immutable';

import inputReducer from '../reducer';
import {
  changeInput,
  updateHistory,
  inputInserted,
  fetchedError,
  fetchLoading,
} from '../actions';

describe('inputReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      stringToInput: '',
      inputHistory: [],
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(inputReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeInput action correctly', () => {
    const fixture = 'changed';
    const expectedResult = state.set('stringToInput', fixture);
    expect(inputReducer(state, changeInput(fixture))).toEqual(expectedResult);
  });

  it('should handle the updateHistory action correctly', () => {
    const fixture = fromJS(['changed', 'changed2']);
    const expectedResult = state
      .set('inputHistory', fixture)
      .set('error', false)
      .set('loading', false);
    expect(inputReducer(state, updateHistory(fixture))).toEqual(expectedResult);
  });

  it('should handle the inputInserted action correctly', () => {
    const expectedResult = state.set('error', false).set('loading', false);
    expect(inputReducer(state, inputInserted)).toEqual(expectedResult);
  });

  it('should handle the fetchedError action correctly', () => {
    const fixture = fromJS({ error: 'some error message' });
    const expectedResult = state.set('error', fixture).set('loading', false);
    expect(inputReducer(state, fetchedError(fixture))).toEqual(expectedResult);
  });

  it('should handle the fetchLoading action correctly', () => {
    const expectedResult = state.set('error', false).set('loading', true);
    expect(inputReducer(state, fetchLoading())).toEqual(expectedResult);
  });
});
