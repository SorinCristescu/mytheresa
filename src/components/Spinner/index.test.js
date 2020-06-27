import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

it('to render Spinner component', () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
