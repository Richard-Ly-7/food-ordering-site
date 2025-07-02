import Dish from '../components/Dish';
import SearchBar from '../components/SearchBar';

export default function Home(){
    return (
      <div className="wrapper home-wrapper shadow-sm">
        
        <p className="h1 text-center">Welcome to OrderDropper!</p>
        <p className="h6 fw-light text-center mb-5">Find what you're craving.</p>
        <SearchBar />

        <div className="m-auto row pb-5">
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
        </div>
        <div className="m-auto row pb-5">
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
        </div>
        <div className="m-auto row pb-5">
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
          <Dish dish={{base64: "https://picsum.photos/id/237/200/300", restaurant: "testRestaurant", price: "69.99", name: "TestDish"}}/>
        </div>
      </div>
    )
}