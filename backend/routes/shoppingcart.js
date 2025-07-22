const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user?.shoppingCart ? res.json({ shoppingCart: user.shoppingCart }) : res.status(404).json({ error: 'User not found/User is not a buyer' });
    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});

router.put('/:id', async (req, res) => {
    const { shoppingCart } = req.body;
    try{
        const updated = await User.findByIdAndUpdate(
            req.params.id,
            { $set: { shoppingCart } },
            { new : true }
        );

    updated ? res.json({ message: 'Shopping cart updated' }) : res.status(404).json({ error: 'Not found' });

    } catch {
        res.status(400).json({ error: 'Invalid ID' });
    }
});


module.exports = router;