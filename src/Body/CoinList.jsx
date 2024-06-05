import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";
import { getAssets } from "../api/assets";
import { coinDataFormat } from "./utils";
import ErrorModal from "../ErrorModal";
import { NumericFormat } from 'react-number-format';

function CoinsList({ setPage }) {
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [coinData, setCoinData] = React.useState({});
  const [coinList, setCoinList] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleOnClick = (coin) => {
    setShowInfoModal(true);
    setCoinData(coin);
  };

  React.useEffect(() => {
    getAssets()
      .then((json) => setCoinList(json.data))
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP(24H)</th>
            <th>Supply</th>
            <th>Volume(24H)</th>
            <th>Change(24H)</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => {
            const formatedCoin = coinDataFormat(coin);
            return (
              <tr
                key={formatedCoin.id}
                onClick={() => handleOnClick(formatedCoin)}
              >
                <td>{formatedCoin.rank}</td>
                <td>{formatedCoin.name}</td>
                <td>
                  <NumericFormat
                    value={formatedCoin.priceUsd}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <NumericFormat
                    value={formatedCoin.marketCapUsd}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <NumericFormat
                    value={formatedCoin.vwap24Hr}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <NumericFormat
                    value={formatedCoin.supply}
                    displayType={'text'}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <NumericFormat
                    value={formatedCoin.volumeUsd24Hr}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td>
                  <NumericFormat
                    value={formatedCoin.changePercent24Hr}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={'%'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      
      <CoinInfoModal
        setPage={setPage}
        show={showInfoModal}
        setShow={setShowInfoModal}
        coinData={coinData}
      />
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default CoinsList;
