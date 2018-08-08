import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { changeInput, insertInput } from 'containers/InputPage/actions';
import { ChangeInputPage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<ChangeInputPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<ChangeInputPage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.inputLabel} />),
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeInput', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeInput).toBeDefined();
      });

      it('should dispatch changeInput when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const stringToInput = 'test';
        result.onChangeInput({ target: { value: stringToInput } });
        expect(dispatch).toHaveBeenCalledWith(changeInput(stringToInput));
      });
    });

    describe('onInsertInput', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onInsertInput).toBeDefined();
      });

      it('should dispatch insertInput when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onInsertInput();
        expect(dispatch).toHaveBeenCalledWith(insertInput());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onInsertInput(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
