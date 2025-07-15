import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import RestaurantDishes from './pages/RestaurantDishes';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from './pages/Post';
import ShoppingCart from './pages/ShoppingCart';
import Purchase from './pages/Purchase';

function App() {
    const [user, setUser] = useState(null);
    
    const handleLogin = (user) => {
        setUser(user);
    };

    const handleLogout = async () => {
        await fetch('http://localhost:4000/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
        });

        setUser(null);
    };

return (
    <>
    <Navbar user={user} onLogout={handleLogout} />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurantdishes" element={<RestaurantDishes />} />
        <Route path="/login" element={<Login onAuth={handleLogin} />} />
        <Route path="/register" element={<Register onAuth={handleLogin} />} />
        <Route path="/post" element={user ? (user.role === "restaurant" ? <Post user={user} /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
        <Route path="/shoppingcart" element={user ? (user.role === "buyer" ? <ShoppingCart /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
        <Route path="/purchase" element={user ? (user.role === "buyer" ? <Purchase /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
    </Routes>


    </>
)
}

export default App
