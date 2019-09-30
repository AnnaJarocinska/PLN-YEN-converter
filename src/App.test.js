import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import CurrencyConverter from './components/CurrencyConverter';


it('renders without crashing', () => {
  shallow(<App />);
});

it('includes CurrencyConverter', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<CurrencyConverter />)).toEqual(true)
});

// it('includes div', () => {
//   const app = shallow(<App />);
//   expect(app.containsMatchingElement(<div />)).toEqual(true)
// });