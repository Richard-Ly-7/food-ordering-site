const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    price: { type: Number, required: true },
    base64: { type: String, required: true }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
