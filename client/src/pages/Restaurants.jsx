import { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import PageButtons from '../components/PageButtons';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'; 

export default function Restaurants () {
    const api = import.meta.env.VITE_API_URL;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const decrementPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);  
        }
    }

    const incrementPage = () => {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        fetch(`${api}/restaurants?page=${currentPage}&limit=${5}&searchQuery=${searchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                setRestaurants(data.restaurants); 
                setLastPage(Math.ceil(data.totalRestaurants / 5))
                setIsLoading(false);
            });
    }, [currentPage, searchQuery]);

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

        <SearchBar setSearchQuery={setSearchQuery}/>
        
        <RestaurantList restaurants={restaurants} />

        <PageButtons currentPage={currentPage} lastPage={lastPage} decrementPage={decrementPage} incrementPage={incrementPage} />
        
      </Container>
    )
}