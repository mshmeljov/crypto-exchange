import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../service/state";
import { ReactComponent as Sun } from "../components/DarkMode/Sun.svg";
import { ReactComponent as Moon } from "../components/DarkMode/Moon.svg";
import "../components/DarkMode/DarkMode.css";
import { AppContext } from "../providers/AppProvider";

function Navigation({ toggleTheme, theme }) {
  const appContext = React.useContext(AppContext);
  const dispatch = useDispatch();

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3 my-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text className="justify-content-end d-flex align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="highlights"
                className="me-2"
                checked={appContext.switchHighLights}
                onChange={() => appContext.setSwitchHighLights((oldValue) => !oldValue)}
              />
              <div className="dark_mode">
                <input
                  className="dark_mode_input"
                  type="checkbox"
                  id="darkmode-toggle"
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                  <Sun />
                  <Moon />
                </label>
              </div>
              <Button
                onClick={() => dispatch(setShowSideBar(true))}
                variant="primary"
                className="w-100"
              >
                Search
              </Button>
            </Navbar.Text>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
