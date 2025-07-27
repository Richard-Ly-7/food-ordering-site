const express = require('express');
const rateLimit = require('express-rate-limit');
const Restaurant = require('../models/Restaurant');
const Dish = require('../models/Dish');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
//     message: 'Too many requests, try again later.'
// });

// router.use(limiter);

router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const searchQuery = req.query.searchQuery || "";

        const startIndex = limit * (page - 1);

        const restaurants = await Restaurant.find();

        const filteredRestaurants = searchQuery ? 
            restaurants.filter((restaurant) => 
                restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) : restaurants;
        const totalRestaurants = filteredRestaurants.length;
        const displayedRestaurants = filteredRestaurants.slice(startIndex, startIndex + limit);
        
        res.json({
            restaurants: displayedRestaurants.map(restaurant => ({ ...restaurant._doc, id: restaurant._id })),
            totalRestaurants
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 9;
        const searchQuery = req.query.searchQuery || "";

        const startIndex = limit * (page - 1);

        const restaurant = await Restaurant.findById(req.params.id);
        const dishes = await Dish.find({restaurantId: req.params.id})
        const filteredDishes = searchQuery ? 
            dishes.filter((dish) => 
                dish.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) : dishes;
        
        const totalDishes = filteredDishes.length;
        const displayedDishes = filteredDishes.slice(startIndex, startIndex + limit);

        const dishList = displayedDishes.map(dish => ({...dish._doc, id: dish._id}));

        restaurant && dishes ? res.json({ restaurant: restaurant, dishes: dishList, totalDishes }) : res.status(404).json({ error: 'Restaurant/restaurant dishes not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.get('/findRestaurant/:email', async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({userEmail: req.params.email});
        restaurant ? res.json({ ...restaurant._doc, id: restaurant._id }) : res.status(404).json({ error: 'Invalid email' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newRestaurant = new Restaurant(req.body);
        const saved = await newRestaurant.save();
        res.status(201).json({ ...saved._doc, id: saved._id });
    } catch {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// router.put('/:id', verifyToken, async (req, res) => {
//     if(req.user.role !== "restaurant"){
//         return res.status(401).json({ error: 'User must have the restaurant role' });
//     }
//     try {
//         const deleted = await Restaurant.findByIdAndDelete(req.params.id);
//         deleted ? res.json({ message: 'Restaurant deleted' }) : res.status(404).json({ error: 'Not found' });
//     } catch {
//         res.status(400).json({ error: 'Invalid ID' });
//     }
// });

// router.delete('/:id', verifyToken, async (req, res) => {
//     if(req.user.role !== "restaurant"){
//         return res.status(401).json({ error: 'User must have the restaurant role' });
//     }
//     try {
//         const deleted = await Restaurant.findByIdAndDelete(req.params.id);
//         deleted ? res.json({ message: 'Restaurant deleted' }) : res.status(404).json({ error: 'Not found' });
//     } catch {
//         res.status(400).json({ error: 'Invalid ID' });
//     }
// });

module.exports = router;