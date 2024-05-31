import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";
import React from "react";

function CoinInfo({ coinData }) {
  const [coinInfo, setCoinInfo] = React.useState({});

  React.useEffect(() => {
    getAssetsById(coinData.id).then((json) => setCoinInfo(json.data));
  }, [coinData.id]);

  return (
    <>
      <Row>
        <Col>
        <div>Rank: {coinInfo.rank}</div>
        </Col>
        <Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>High 70 000</div>
          <div>Low 67 000</div>
        </Col>
        <Col>
          <div>Average {coinInfo.vwap24Hr}</div>
          <div>Change {coinInfo.changePercentage24Hr}%</div>
        </Col>
      </Row>
      <Row>
        <Chart coinData={coinData} />
      </Row>
    </>
  );
}

export default CoinInfo;
