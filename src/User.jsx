import React, { useState } from 'react';
import './index.css';

const CountryStates = {
  "United States": [
    "California",
    "New York",
    "Texas"
  ],
  India: [
    "Tamil Nadu",
    "Karnataka",
    "Delhi",
  ],
  Australia: [
    "Queensland",
    "Western Australia",
    "South Australia",
  ],
};

function User() {
  const [country, setCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  function handleCountryChange(e) {
    const c = e.target.value;
    setCountry(c);
    setStates(c ? CountryStates[c] || [] : []);
    const first = c && CountryStates[c] && CountryStates[c].length > 0 ? CountryStates[c][1] : '';
    setSelectedState(first);
  }

  return (
    <div>
      <h1>Dropdown with Dynamic Options</h1>
      <div className="div-flex">
        <div>
          <h2>Country</h2>
          <select value={country} onChange={handleCountryChange}>
            <option value="">Select country</option>
            {Object.keys(CountryStates).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h2>State</h2>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select state</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}


export default User;