import React from 'react';
import toJSON from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Button from './index';

it('to render Button component', () => {
  const mockProps = [
    {
      name: 'Click',
      width: '200px',
    },
  ];
  expect(shallow(<Button props={mockProps} />)).toMatchSnapshot();
});
