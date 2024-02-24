
import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './App.css';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
     
      <table className="table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Change</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <TableRow key={index} data={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
