import { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'; 

export default function Restaurants () {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:4000/restaurants`)
            .then((res) => res.json())
            .then((data) => {
                setRestaurants(data); 
                setIsLoading(false);
            });
    }, []);

    if (isLoading){
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading restaurants...</span>
                </Spinner>
            </div>
        );
    }

    if(restaurants.length === 0) {
        return <div>No restaurants found.</div>;
    }

    return (
      <Container fluid="md" className="wrapper shadow-sm">
              
        <p className="h2 text-center mb-5">Best Nearby Restaurants</p>
        <SearchBar />

        <RestaurantList restaurants={restaurants} />
        {/* <Row className="justify-content-evenly pb-5">
          <Restaurant restaurant={{base64: "https://picsum.photos/seed/picsum/200/300", name: "Olive Garden", address: "20080 Langley Bypass, Langley, BC V3A 9J7", description: "An Italian restaurant best known for their pastas and salads"}}/>
          <Restaurant restaurant={{base64: "https://picsum.photos/seed/picsum/200/300", name: "Olive Garden", address: "20080 Langley Bypass, Langley, BC V3A 9J7", description: "An Italian restaurant best known for their pastas and salads"}}/>
          <Restaurant restaurant={{base64: "https://picsum.photos/seed/picsum/200/300", name: "Olive Garden", address: "20080 Langley Bypass, Langley, BC V3A 9J7", description: "An Italian restaurant best known for their pastas and salads"}}/>
        </Row> */}

      </Container>
    )
}