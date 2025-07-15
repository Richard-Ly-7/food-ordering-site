import Restaurant from './Restaurant';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function RestaurantList({ restaurants }) {
    return (
        <Container>
            <Row className="justify-content-evenly pb-5">
                {restaurants.map((restaurant) => (
                    <Restaurant id={restaurant.id} key={restaurant.id} restaurant={restaurant} />
                ))}
            </Row>
        </Container>
    );
}