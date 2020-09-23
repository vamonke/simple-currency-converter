import React from 'react';
import { shallow } from 'enzyme';
import ConversionDisplay from './ConversionDisplay';

it('renders without crashing', () => {
  shallow(<ConversionDisplay />);
});

it('displays conversion amount and currency code', () => {
  const wrapper = shallow(<ConversionDisplay amount="1.36" currency="SGD" />);
  expect(wrapper.text()).toMatch(new RegExp("1.36 SGD"));
});
