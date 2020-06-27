import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

it('to render Footer component', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
