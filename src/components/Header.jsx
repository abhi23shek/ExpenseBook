import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../Resources/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <div className="navbar__logo">
            <img src={logo} alt="ExpenseBook Logo" />
            <span className="logo-text1">Expense</span>
            <span className="logo-text2">Book</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml navbar-right">
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/integrations">Integrations</Nav.Link>
            <Nav.Link href="#start-trial">
              <button className="start-trial-btn">Start trial</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
