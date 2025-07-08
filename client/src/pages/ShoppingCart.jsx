import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItem from '../components/CartItem';

export default function ShoppingCart(){
    return (
        <Container fluid="md" className="wrapper shadow-sm">

            <p className="h2 text-center mb-5">Shopping Cart</p>

            <Row className="justify-content-evenly">
                <Col xs={6} sm={6} className="mt-5">
                    <Container className="border border-primary p-4 pt-5 overflow-auto shopping-cart-list">
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                        <CartItem dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
                    </Container>
                </Col>
                <Col xs={2} sm={2} className="d-flex align-items-end">
                    <Container className="text-end border border-primary p-4">
                        <p className="h5">Order Total:</p>
                        <p className="h2">$43.97</p>
                        <Button variant="outline-warning" type="submit" size="lg" className="mt-2">Proceed To Purchase</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}