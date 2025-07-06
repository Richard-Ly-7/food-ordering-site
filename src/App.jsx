import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from './pages/Post';
import ShoppingCart from './pages/ShoppingCart';
import Purchase from './pages/Purchase';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </>
  )
}

export default App
