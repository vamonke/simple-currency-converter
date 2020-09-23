import React from "react";
import PropTypes from 'prop-types';

const Dropdown = props => {
  return (
    <select name="currency">
      {props.currencies.map(currency => {
        return <option key={currency} value={currency}>
          {currency}
        </option>
      })}
    </select>
  )
};

Dropdown.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
};

Dropdown.defaultProps = {
  currencies: []
};

export default Dropdown;