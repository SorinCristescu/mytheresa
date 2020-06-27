import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './index';

it('to render SearchInput component', () => {
  const mockProps = [
    {
      type: 'text',
      placeholder: 'search',
      value: 'value',
      onChange: () => console.log('onClick'),
    },
  ];
  expect(shallow(<SearchInput props={mockProps} />)).toMatchSnapshot();
});
