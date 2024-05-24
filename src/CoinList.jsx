import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import CoinInfoModal from './CoinInfoModal';


function CoinList() {
    const [showInfoModal, setShowInfoModal] = React.useState(false);
    const [selectedCoin, setSelectedCoin] = useState(null);

    const coinNames = ["Bitcoin", "Ethereum", "Tether", "Solana", "BNB"]; 

    const RowClick = (coinName) => {
        setShowInfoModal(true);
        setSelectedCoin(coinName);
      };

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>VWAP (24Hr)</th>
          <th>Supply</th>
          <th>Volume (24Hr)</th>
          <th>Change (24Hr)</th>
        </tr>
      </thead>
      <tbody>
      {coinNames.map((coin, index) => (
        <tr key={index} onClick={() => RowClick(coin)}>
         <td>{index + 1}</td>
         <td>{coin}</td>
         <td>68000</td>
         <td>XXXXXX</td>
         <td>XXXXXX</td>
         <td>XXXXXX</td>
         <td>XXXXXX</td>
         <td>XXXXXX</td>
        </tr>
      ))}
      </tbody>
    </Table>
    <CoinInfoModal show={showInfoModal} setShow={setShowInfoModal} coinName={selectedCoin}/>
    </>
  );
}

export default CoinList;