import { useEffect } from 'react';
import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';

export default function CartList({ cartItems, updateCart }) {

    return (
        <Container className="border border-primary p-4 pt-5 overflow-auto shopping-cart-list">
            {cartItems.map((cartItem, index) => (
                <CartItem key={index} cartItem={cartItem} updateCart={updateCart} />
            ))}
        </Container>
    );
}