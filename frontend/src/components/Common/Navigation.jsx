import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends PureComponent {
  render() {
    const links = Navigation.links;

    return (
      <Navbar fixed="top" expand="lg" bg="white" variant="bt-white" className="bt-navbar">
        <Navbar.Brand as={Link} to="/" className="bt-navbar-brand">BerkeleyTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            {
              links.map(link => (
                <Nav.Link as={Link} to={link.to} key={link.text}>{link.text}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.links = [
  {
    to: '/catalog',
    text: 'Catalog',
  },
  {
    to: '/grades',
    text: 'Grades',
  },
  {
    to: '/enrollment',
    text: 'Enrollment',
  },
  {
    to: '/scheduler',
    text: 'Scheduler',
  },
  {
    to: '/about',
    text: 'About',
  },
];

export default Navigation;