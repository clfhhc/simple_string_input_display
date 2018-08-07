import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ChangeInputPage from '../index';
import messages from '../messages';

describe('<ChangeInputPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<ChangeInputPage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
