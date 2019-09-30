import React from 'react';
import { Component } from 'react';
import CurrencyInput from './CurrencyInput';
import '../style/style.css';

function toPLN(yen) {
  return yen * 0.04;
}

function toYEN(pln) {
  return pln * 28;
}


function convert(value, convert) {
  const input = value;
  parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
}



class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.handlePLNChange = this.handlePLNChange.bind(this);
    this.handleYENChange = this.handleYENChange.bind(this);
    this.state = {
      value: 0,
      currency: 'PLN'
    }
  }
  handlePLNChange(value) {
    this.setState({ currency: 'PLN', value })
  }
  handleYENChange(value) {
    this.setState({ currency: 'YEN', value })
  }

  render() {
    const currency = this.state.currency;
    const value = this.state.value;
    const pln = currency === 'YEN' ? convert(value, toPLN) : value;
    const yen = currency === 'PLN' ? convert(value, toYEN) : value;



    return (
      <div className="currencyConverter">
        <div className="currencyConverter__container">
          <h1 className="currencyConverter__title" > PLN - YEN CONVERTER </h1>
          <CurrencyInput currency='PLN' value={pln} onCurrencyChange={this.handlePLNChange} className="currencyConverer__input" />
          <CurrencyInput currency='YEN' value={yen} onCurrencyChange={this.handleYENChange} className="currencyConverer__input" />
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;