import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dropdown from "./components/Dropdown";

const GET_CURRENCIES_URL = "https://api.exchangeratesapi.io/latest?base=USD";

function App() {
  const getCurrencies = () => {
    axios.get(GET_CURRENCIES_URL)
      .then(function (response) {
        // handle success
        const rates = response.data.rates;
        const currencies = Object.keys(rates);
        setCurrencies(currencies);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const [currencies, setCurrencies] = useState([]);

  return (
    <div className="App">
      <h1>1 USD</h1>
      <Dropdown currencies={currencies} />
    </div>
  );
}

export default App;
