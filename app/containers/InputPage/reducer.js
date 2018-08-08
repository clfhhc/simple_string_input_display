import { fromJS } from 'immutable';

import {
  INPUT_PAGE_CHANGE_INPUT,
  INPUT_PAGE_FETCHED,
  INPUT_PAGE_INSERTED,
  INPUT_PAGE_ERROR,
  INPUT_PAGE_LOADING,
} from './constants';

export const initialState = fromJS({
  stringToInput: '',
  inputHistory: [],
  loading: false,
  error: false,
});

function inputReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_PAGE_CHANGE_INPUT: {
      return state.set('stringToInput', action.stringToInput);
    }
    case INPUT_PAGE_FETCHED: {
      return state
        .set('loading', false)
        .set('error', false)
        .set('inputHistory', fromJS(action.inputHistory));
    }
    case INPUT_PAGE_INSERTED: {
      return state
        .set('error', false)
        .set('loading', false)
        .set('stringToInput', '');
    }
    case INPUT_PAGE_ERROR: {
      return state.set('error', action.error).set('loading', false);
    }
    case INPUT_PAGE_LOADING: {
      return state.set('loading', true).set('error', false);
    }
    default: {
      return state;
    }
  }
}

export default inputReducer;
