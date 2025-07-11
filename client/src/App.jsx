import { useState } from 'react';
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
        setMessage('Logged out.');
    };

return (
    <>
    <Navbar user={user} onLogout={handleLogout} />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login onAuth={handleLogin} />} />
        <Route path="/register" element={<Register onAuth={handleLogin} />} />
        <Route path="/post" element={<Post />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/purchase" element={<Purchase />} />
    </Routes>
    </>
)
}

export default App
