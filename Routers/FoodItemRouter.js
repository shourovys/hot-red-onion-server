const express = require('express');
const {
    addFoodItem,
    getAllFoodItem,
    getSingleFoodItem
} = require('../Controllers/FoodItemController');

const foodItemRouter = express.Router();
foodItemRouter.post('/add', addFoodItem);

foodItemRouter.get('/all', getAllFoodItem);

foodItemRouter.get('/:id', getSingleFoodItem);

module.exports = foodItemRouter;
