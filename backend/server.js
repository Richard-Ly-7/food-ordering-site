const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dishesRouter = require('./routes/dishes');
const restaurantsRouter = require('./routes/restaurants');
const authRoutes = require('./routes/auth.js');
const shoppingCartRoutes = require('./routes/shoppingcart.js');

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.APP_ORIGIN || "http://localhost:5173",
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use('/dishes', dishesRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/api/auth', authRoutes);
app.use('/shoppingcart', shoppingCartRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => 
        console.error("MongoDB connection error:", err));
app.listen(process.env.PORT || 4000, () => {
    console.log(`REST API running at http://localhost:${process.env.PORT}`);
})