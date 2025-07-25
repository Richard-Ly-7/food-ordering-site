import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
      onLogout();
      navigate('/');
  };

  return (
    <NavigationBar collapseOnSelect expand="lg" className="navbar-background">
      <Container>
        <NavigationBar.Brand as={Link} to="/" id="brand" className="text-light">OrderDropper</NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="responsive-NavigationBar-nav" />
        <NavigationBar.Collapse id="responsive-NavigationBar-nav">
          <Nav className="ms-auto pt-1">
            <Nav.Link as={Link} to="/"><p className="text-light h5">Home</p></Nav.Link>
            <Nav.Link as={Link} to="/restaurants"><p className="text-light h5">Restaurants</p></Nav.Link>
            {!user ? (
                <>
                  <Nav.Link as={Link} to="/register"><p className="text-light h5">Register</p></Nav.Link>
                  <Nav.Link as={Link} to="/login"><p className="text-light h5">Login</p></Nav.Link>
                </>
              ) : (
                user.role === "restaurant" ? 
                <>
                  <Nav.Link as={Link} to="/post"><p className="text-light h5">Post</p></Nav.Link>
                  <Nav.Link as={Link} to={`/restaurantDishes?restaurant=${user.restaurantId}`}><p className="text-light h5">Profile</p></Nav.Link>
                  <Button variant="link" type="button" size="lg" onClick={handleLogout} >Logout</Button>
                </>
                :
                <>
                  <Nav.Link as={Link} to="/shoppingcart"><p className="text-light h5">Checkout</p></Nav.Link>
                  <Nav.Link as={Link} to="/profile"><p className="text-light h5">Profile</p></Nav.Link>
                  <Button variant="link" type="button" size="lg" onClick={handleLogout} >Logout</Button>
                </>
              )
            }
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}
//`/restaurantDishes?restaurant=${user.restaurantId}`
