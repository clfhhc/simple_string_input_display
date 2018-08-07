import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInput = state => state.get('input', initialState);

const makeSelectStringToInput = () =>
  createSelector(selectInput, inputState => inputState.get('stringToInput'));

const makeSelectInputHistory = () =>
  createSelector(selectInput, inputState =>
    inputState.get('inputHistory').toJS(),
  );

const makeSelectLoading = () =>
  createSelector(selectInput, inputState => inputState.get('loading'));

const makeSelectError = () =>
  createSelector(selectInput, inputState => inputState.get('error'));

export {
  selectInput,
  makeSelectStringToInput,
  makeSelectInputHistory,
  makeSelectLoading,
  makeSelectError,
};
