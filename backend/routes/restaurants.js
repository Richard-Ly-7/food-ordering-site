const express = require('express');
const rateLimit = require('express-rate-limit');
const Restaurant = require('../models/Restaurant');
const Dish = require('../models/Dish');

const router = express.Router();

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
//     message: 'Too many requests, try again later.'
// });

// router.use(limiter);

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants.map(restaurant => ({ ...restaurant._doc, id: restaurant._id })));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        const dishes = await Dish.find({restaurantId: req.params.id})

        const dishList = dishes.map(dish => ({...dish._doc, id: dish._id}));

        restaurant && dishes ? res.json({ restaurant: restaurant, dishes: dishList }) : res.status(404).json({ error: 'Restaurant/restaurant dishes not found' });
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

router.put('/:id', async (req, res) => {
    try {
        const deleted = await Restaurant.findByIdAndDelete(req.params.id);
        deleted ? res.json({ message: 'Restaurant deleted' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Restaurant.findByIdAndDelete(req.params.id);
        deleted ? res.json({ message: 'Restaurant deleted' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

module.exports = router;