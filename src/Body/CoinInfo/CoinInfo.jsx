import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";
import "./coinInfo.css";
import ErrorModal from "../../ErrorModal";
import { NumericFormat } from 'react-number-format';

function CoinInfo({ coinData }) {
  const [coinInfo, setCoinInfo] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    getAssetsById(coinData.id)
      .then((json) => setCoinInfo(json.data))
      .catch((error) => setErrorMessage(error.message));
  }, [coinData.id]);

  return (
    <>
      <Row>
        <Col>
          <Col>
            <div className="rank">Rank: {coinInfo.rank}</div>
          </Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>
            High{" "}
            <NumericFormat
              value={700000}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
          <div>
            Low{" "}
            <NumericFormat
              value={670000}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </Col>
        <Col>
          <div>
            Average 24h{" "}
            <NumericFormat
              value={coinInfo.vwap24Hr}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
          <div>
            Change 24h{" "}
            <NumericFormat
              value={coinInfo.changePercent24Hr}
              displayType={'text'}
              thousandSeparator={true}
              suffix={'%'}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Chart coinData={coinData} />
      </Row>
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default CoinInfo;
