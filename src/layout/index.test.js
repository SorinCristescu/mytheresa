import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';

it('to render Layout component', () => {
  expect(shallow(<Layout />)).toMatchSnapshot();
});
