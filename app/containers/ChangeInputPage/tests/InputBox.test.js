import React from 'react';
import { shallow } from 'enzyme';

import InputBox from '../InputBox';

describe('<InputBox />', () => {
  it('should render an <InputBox> tag', () => {
    const renderedComponent = shallow(<InputBox />);
    expect(renderedComponent.type()).toEqual('input');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<InputBox />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<InputBox id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<InputBox attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});