import Dish from '../components/Dish';
import SearchBar from '../components/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home(){
    return (
      <Container className="wrapper shadow-sm">
        
        <p className="h1 text-center">Welcome to OrderDropper!</p>
        <p className="h6 fw-light text-center mb-5">Find what you're craving.</p>
        <SearchBar />

        <Container>
          <Row className="justify-content-evenly pb-5">
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          </Row>
          <Row className="justify-content-evenly pb-5">
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          </Row>
          <Row className="justify-content-evenly pb-5">
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
            <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          </Row>
        </Container>
      </Container>
    )
}