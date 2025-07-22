import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Restaurant from '../components/Restaurant';
import DishList from '../components/DishList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'; 

export default function RestaurantDishes({ updateCart, user }){
    const [searchParams] = useSearchParams();
    const restaurantId = searchParams.get('restaurant');

    const [restaurantDishes, setRestaurantDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:4000/restaurants/${restaurantId}`)
            .then((res) => res.json())
            .then((data) => {
                setRestaurantDishes(data); 
                setIsLoading(false);
            });
    }, []);

    if (isLoading){
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading dishes...</span>
                </Spinner>
            </div>
        );
    }

    if(restaurantDishes.length === 0) {
        return <div>No dishes found.</div>;
    }

    return (
        <Container fluid="md" className="wrapper shadow-sm">


            <Row className="justify-content-evenly pb-5">
                <Restaurant restaurant={restaurantDishes.restaurant} />
            </Row>

            <p className="h2 text-center mb-5">{restaurantDishes.restaurant.name}'s Menu</p>

            <DishList dishes={restaurantDishes.dishes} updateCart={updateCart} user={user} />

        </Container>
    )
}