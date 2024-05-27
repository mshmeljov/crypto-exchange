import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SubHeader() {
  return (
    <Container>
      <Row>
        <Col>MARKET CAP <br />$2.49T</Col>
        <Col>EXCHANGE VOL <br />$57.87B</Col>
        <Col>ASSETS <br />2,297</Col>
        <Col>EXCHANGES <br />73</Col>
        <Col>MARKETS <br />9,065</Col>
        <Col>BTC DOM INDEX <br />53.9%</Col>
      </Row>
    </Container>
  );
}

export default SubHeader;