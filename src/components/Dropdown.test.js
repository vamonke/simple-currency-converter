import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

it('renders without crashing', () => {
  shallow(<Dropdown />);
});

it('renders without crashing', () => {
  const wrapper = shallow(<Dropdown currencies={["SGD", "HKD"]} />);
  expect(wrapper.contains([
    <option value="SGD">SGD</option>,
    <option value="HKD">HKD</option>
  ])).toEqual(true);
});
