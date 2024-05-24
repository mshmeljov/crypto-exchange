import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CoinInfo({ coinData }) {
    return (<Row>
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
            <div>Average 69 000</div>
            <div>Change -3%</div>
        </Col>
    </Row>);
}

export default CoinInfo;