import { useState, useEffect } from 'react';
import DishList from '../components/DishList';
import SearchBar from '../components/SearchBar';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'; 

export default function Home({ updateCart, user }){

    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:4000/dishes`)
            .then((res) => res.json())
            .then((data) => {
                setDishes(data); 
                setIsLoading(false);
            });
    }, [dishes]);

    if (isLoading){
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading dishes...</span>
                </Spinner>
            </div>
        );
    }

    if(dishes.length === 0) {
        return <div>No dishes found.</div>;
    }

    return (
      <Container className="wrapper shadow-sm">
        
        <p className="h2 text-center">Welcome to OrderDropper!</p>
        <p className="h6 fw-light text-center mb-5">Find what you're craving.</p>
        <SearchBar />

        <DishList dishes={dishes} updateCart={updateCart} user={user} />

      </Container>
    )
}