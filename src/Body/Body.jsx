import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";

function Body(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinList {...props} />} />
        <Route path="/coin/:id/:period" element={<CoinInfo />} />
        <Route path="/coin/:id/" element={<CoinInfo />} />
        <Route path="/contacts/" element={<Contacts />} />
      </Routes>
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;