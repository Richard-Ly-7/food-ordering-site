import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../components/CartList';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'; 

export default function ShoppingCart({user, updateCart}){

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:4000/shoppingcart/${user.id}`)
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data.shoppingCart); 
                setIsLoading(false);
            });
    }, [user.shoppingCart]);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(cartItem => total += cartItem.price);
        setTotalPrice(total.toFixed(2));
    }, [cartItems])

    return (
        <Container fluid="md" className="wrapper shadow-sm">

            <p className="h2 text-center mb-5">Shopping Cart</p>

            <Row className="justify-content-evenly">
                <Col xs={6} sm={6} className="mt-5">
                    {isLoading ? 

                        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                            <Spinner animation='border' role='status' variant='primary'>
                                <span className='visually-hidden'>Loading dishes...</span>
                            </Spinner>
                        </div> :

                        (
                            cartItems.length === 0 ? <div>Cart is empty.</div> : <CartList cartItems={cartItems} updateCart={updateCart} />
                        )
                    }
                </Col>
                <Col xs={2} sm={2} className="d-flex align-items-end">
                    <Container className="text-end border border-primary p-4">
                        <p className="h5">Order Total:</p>
                        <p className="h2">${totalPrice}</p>
                        <Button variant="outline-warning" type="submit" size="lg" className="mt-2" onClick={()=> navigate(`/purchase`) }>Proceed To Purchase</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}