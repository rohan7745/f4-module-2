
import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr>
      <td><img src={data.image} alt={data.name} /></td>
      <td>{data.name}</td>
      <td>{data.symbol.toUpperCase()}</td>
      <td>${data.current_price.toFixed(2)}</td>
      <td>${data.total_volume.toLocaleString()}</td>
      <td>{data.price_change_percentage_24h.toFixed(2)}%</td>
      <td>Mkt Cap :${data.market_cap.toLocaleString()}</td>
    </tr>
  );
}

export default TableRow;
