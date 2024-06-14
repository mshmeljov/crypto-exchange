import React from "react";
import Navigation from "./Navigation";
import SubHeader from "./SubHeader/Main";
import { mainSubHeader } from "./SubHeader/constants";
import { useMatch } from "react-router-dom";

function Header({ toggleTheme, theme }) {
  console.log('Header');
  const match = useMatch("/");

  return (
    <>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      {match && <SubHeader data={mainSubHeader} />}
    </>
  );
}

export default Header;
