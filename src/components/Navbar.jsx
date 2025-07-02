import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  return (
    <NavigationBar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavigationBar.Brand href="#home" id="#brand">OrderDropper</NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="responsive-NavigationBar-nav" />
        <NavigationBar.Collapse id="responsive-NavigationBar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Restaurants</Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

