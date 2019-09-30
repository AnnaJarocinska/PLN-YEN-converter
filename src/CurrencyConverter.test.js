import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<CurrencyConverter />);
});

