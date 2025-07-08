const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const dishesRouter = require('./routes/dishes');
const restaurantsRouter = require('./routes/restaurants');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/dishes', dishesRouter);
app.use('/restaurants', restaurantsRouter);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => 
        console.error("MongoDB connection error:", err));
app.listen(4000, () => {
    console.log('REST API running at http://localhost:4000');
})