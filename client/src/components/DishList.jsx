import Dish from './Dish';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function FlightList({ dishes, updateCart, user }) {
    const dishList = [];

    for (let i = 0; i < dishes.length; i += 3) {
        dishList.push(
            <Row key={i} className="justify-content-evenly pb-5">
                {dishes.slice(i, i + 3).map((dish) => (
                    <Dish
                        key={dish._id}
                        dish={dish}
                        updateCart={updateCart} 
                        user={user}
                    />
                ))}
            </Row>
        );
    }

    return (
        <Container>
            {dishList}
        </Container>
    );
}