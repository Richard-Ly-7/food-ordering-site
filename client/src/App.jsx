import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
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
    const [cartTotal, setCartTotal] = useState(0);
    
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

    const updateCart = async (dish, addToCart) => {
        let updatedCart = [];

        if(addToCart){
            const cartItem = {...dish, id: nanoid()};
            updatedCart = [...(user.shoppingCart || []), cartItem];
        }else{
            updatedCart = user.shoppingCart ? user.shoppingCart.filter(d => d.id !== dish.id) : [];
        }
        
        setUser({...user, shoppingCart: updatedCart})

        await fetch(`http://localhost:4000/shoppingcart/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ shoppingCart: updatedCart }),
        });

    }

    useEffect(() => {
        let total = 0;
        if(user?.shoppingCart){
            user.shoppingCart.forEach(cartItem => total += cartItem.price);
        }
        setCartTotal(total.toFixed(2));
    }, [user?.shoppingCart])

return (
    <>
    <Navbar user={user} onLogout={handleLogout} />

    <Routes>
        <Route path="/" element={<Home updateCart={updateCart} user={user} />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurantdishes" element={<RestaurantDishes updateCart={updateCart} user={user} />} />
        <Route path="/login" element={<Login onAuth={handleLogin} />} />
        <Route path="/register" element={<Register onAuth={handleLogin} />} />
        <Route path="/post" element={user ? (user.role === "restaurant" ? <Post user={user} /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
        <Route path="/shoppingcart" element={user ? (user.role === "buyer" ? <ShoppingCart user={user} updateCart={updateCart} cartTotal={cartTotal} /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
        <Route path="/purchase" element={user ? (user.role === "buyer" && user?.shoppingCart?.length > 0 ? <Purchase cartTotal={cartTotal}  /> : <Navigate to="/" />) : <Navigate to="/login" /> } />
    </Routes>


    </>
)
}

export default App
