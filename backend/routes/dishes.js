const express = require('express');
const rateLimit = require('express-rate-limit');
const Dish = require('../models/Dish');

const router = express.Router();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests, try again later.'
});

router.use(limiter);

router.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes.map(dish => ({...dish._doc, id: dish._id})));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dishes' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        dish ? res.json({ ...dish._doc, id: dish._id}) : res.status(404).json({ error: 'Dish not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newDish = new Dish(req.body);
        const saved = await newDish.save();
        res.status(201).json({ ...saved._doc, id: saved._id });
    } catch {
        res.status(400).json({ error: 'Invalid input' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const deleted = await Dish.findByIdAndDelete(req.params.id);
        deleted ? res.json({ message: 'Dish deleted' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Dish.findByIdAndDelete(req.params.id);
        deleted ? res.json({ message: 'Dish deleted' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

module.exports = router;