import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <NavigationBar collapseOnSelect expand="lg" className="navbar-background">
      <Container>
        <NavigationBar.Brand href="/" id="#brand" className="text-light">OrderDropper</NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="responsive-NavigationBar-nav" />
        <NavigationBar.Collapse id="responsive-NavigationBar-nav">
          <Nav className="ms-auto pt-1">
            <Nav.Link href="/"><p className="text-light h5">Home</p></Nav.Link>
            <Nav.Link href="/restaurants"><p className="text-light h5">Restaurants</p></Nav.Link>
            <Nav.Link href="/login"><p className="text-light h5">Login</p></Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

