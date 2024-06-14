import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Container>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Body toggleTheme={toggleTheme} theme={theme} />
    </Container>
  );
}

export default App;
