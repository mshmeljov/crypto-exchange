import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm({ onSearch }) {
  const [coin, setCoin] = useState("");
  const [periodFrom, setPeriodFrom] = useState("");
  const [periodTill, setPeriodTill] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ coin, periodFrom, periodTill });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formCoin">
      <Form.Label>Coin Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Bitcoin"
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPeriodFrom">
        <Form.Label>From</Form.Label>
        <Form.Control
          type="date"
          value={periodFrom}
          onChange={(e) => setPeriodFrom(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPeriodTill">
        <Form.Label>Till</Form.Label>
        <Form.Control
          type="date"
          value={periodTill}
          onChange={(e) => setPeriodTill(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
