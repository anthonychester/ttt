import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export class Navb extends React.Component {
  switch() {
    document.body.classList.toggle("dark-theme");
  }

  render() {
    if (localStorage.getItem("login") == null) {
      return (
        <Navbar collapseOnSelect expand="lg" className="Navbar">
          <Container>
            <Navbar.Brand href="/home">Triple T</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link eventKey={2} href="/signin">
                  Sign in
                </Nav.Link>
                <Nav.Link onClick={this.switch}>Switch</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Triple T</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              </Nav>

              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}
