import React from 'react';

class CurrencyInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCurrencyChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const currency = this.props.currency;
        return (
            <>
                <fieldset className="currencyConverter__fieldset">
                    <legend className="currencyConverter__legend">currency: {currency} </legend>
                    <input type="number" className="currencyConverter__input" value={value} onChange={this.handleChange} />
                </fieldset>
            </>
        );
    }
}

export default CurrencyInput;