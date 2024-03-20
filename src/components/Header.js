import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import logo from '../Images/sw-wide.svg';

function Header() {
  const [cookies, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();
  const isLoggedIn = !!cookies.user;

  const handleLogout = () => {
    removeCookie('user');
    navigate('/login');

  };

  const renderLoggedInNavbar = () => (

    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Company Logo" style={{ marginTop: '-10px', height: '100px', width: '150px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const renderLoggedOutNavbar = () => (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Company Logo" style={{ marginTop: '-10px', height: '100px', width: '150px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  return (
    <div>
      {isLoggedIn ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
    </div>
  );
}

export default Header;
