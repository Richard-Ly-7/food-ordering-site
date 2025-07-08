const express = require('express');
const rateLimit = require('express-rate-limit');
const Restaurant = require('../models/Restaurant');

const router = express.Router();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests, try again later.'
});

router.use(limiter);

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dishes' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        restaurant ? res.json(restaurant) : res.status(404).json({ error: 'Restaurant not found' });
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