import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { periods } from "./CoinInfo/constants";
import { Link } from "react-router-dom";
import { searchAssets } from "../api/assets";
import { setFoundCoins, setSearchPeriod } from "../service/state";

function SearchForm({ closeSideBar }) {
  console.log("SearchForm");

  const dispatch = useDispatch();
  const foundCoins = useSelector((state) => state.foundCoins);
  const currentPeriod = useSelector((state) => state.searchPeriod);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const coin = event.target.coin.value;
    const selectedPeriod = event.target.period.value;

    dispatch(setSearchPeriod(selectedPeriod));
    searchAssets(coin).then((json) => dispatch(setFoundCoins(json.data)));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="coin">
        <Form.Label>Coin</Form.Label>
        <Form.Control type="text" name="coin" placeholder="Enter coin" />
        <Form.Text className="text-muted">Example "BTC"</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="period">
        <Form.Label>Period</Form.Label>
        <Form.Select name="period">
          {periods.map((period, index) => (
            <option key={index} value={period.label}>
              {period.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Search
      </Button>
      {foundCoins.length
        ? foundCoins
            .filter((coin) => !!coin.changePercent24Hr)
            .map((coin) => (
              <div key={coin.id}>
                <Link
                  to={`/coin/${coin.id}/${currentPeriod}`}
                  onClick={() => closeSideBar()}
                >
                  {coin.name}
                </Link>
              </div>
            ))
        : null}
    </Form>
  );
}

export default SearchForm;
