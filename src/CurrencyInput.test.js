import React from 'react';
import CurrencyInput from './components/CurrencyInput';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<CurrencyInput />);
});