const express = require('express');
const rateLimit = require('express-rate-limit');
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
        const limit = parseInt(req.query.limit) || 9;
        const searchQuery = req.query.searchQuery || "";

        const startIndex = limit * (page - 1);

        const dishes = await Dish.find().sort({createdAt: -1});
        console.log(dishes);
        const filteredDishes = searchQuery ? 
            dishes.filter((dish) => 
                dish.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) : dishes;
        const totalDishes = filteredDishes.length;
        const displayedDishes = filteredDishes.slice(startIndex, startIndex + limit);
        res.json({
            dishes: displayedDishes.map(dish => ({...dish._doc, id: dish._id})),
            totalDishes
        });
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


router.post('/', verifyToken, async (req, res) => {
    if(req.user.role !== "restaurant"){
        return res.status(401).json({ error: 'User must have the restaurant role' });
    }
    try {
        const newDish = new Dish(req.body);
        const saved = await newDish.save();
        res.status(201).json({ ...saved._doc, id: saved._id });
    } catch {
        res.status(400).json({ error: 'Invalid input' });
    }
});

router.put('/:id', verifyToken, async (req, res) => {
    if(req.user.role !== "restaurant"){
        return res.status(401).json({ error: 'User must have the restaurant role' });
    }
    try {
        const {updatedDish} = req.body;
        const updated = await Dish.findByIdAndUpdate(
            req.params.id,
            { $set: updatedDish }
        );
        updated ? res.json({ message: 'Dish updated' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.delete('/:id', verifyToken, async (req, res) => {
    if(req.user.role !== "restaurant"){
        return res.status(401).json({ error: 'User must have the restaurant role' });
    }
    try {
        const deleted = await Dish.findByIdAndDelete(req.params.id);
        deleted ? res.json({ message: 'Dish deleted' }) : res.status(404).json({ error: 'Not found' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

module.exports = router;