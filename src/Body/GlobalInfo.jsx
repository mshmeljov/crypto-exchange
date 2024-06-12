import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { getGlobalInfo } from '../api/assets';
import './GlobalInfo.css';

function GlobalInfo() {
    const [globalInfo, setGlobalInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchGlobalInfo = async () => {
        try {
          const data = await getGlobalInfo();
          setGlobalInfo(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGlobalInfo();
    }, []);
  
    if (loading) {
      return (
        <Container className="global-info-container text-center my-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    }
  
    if (error) {
      return (
        <Container className="global-info-container my-5">
          <Alert variant="danger">{error}</Alert>
        </Container>
      );
    }
  
    return (
      <Container className="global-info-container my-5">
        <Card className="shadow-sm">
          <Card.Body>
            {/* <Card.Title className="mb-4 text-center">Global Cryptocurrency Info</Card.Title> */}
            <Row>
              <Col md={6} className="mb-3">
                <Card.Text>
                  <strong>Total Market Cap:</strong> ${globalInfo.market_cap_usd.toLocaleString()}
                </Card.Text>
              </Col>
              <Col md={6} className="mb-3">
                <Card.Text>
                  <strong>24h Volume:</strong> ${globalInfo.volume_24h_usd.toLocaleString()}
                </Card.Text>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Card.Text>
                  <strong>Bitcoin Dominance:</strong> {globalInfo.bitcoin_dominance_percentage.toFixed(2)}%
                </Card.Text>
              </Col>
              <Col md={6} className="mb-3">
                <Card.Text>
                  <strong>Number of Cryptocurrencies:</strong> {globalInfo.cryptocurrencies_number}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  
  export default GlobalInfo;