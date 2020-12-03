const express = require('express');
const {
    addFoodItem,
    getAllFoodItem,
    getSingleFoodItem,
    getSameCategoryFoods
} = require('../Controllers/FoodItemController');

const foodItemRouter = express.Router();
foodItemRouter.post('/add', addFoodItem);

foodItemRouter.get('/all', getAllFoodItem);

foodItemRouter.get('/same/:category', getSameCategoryFoods);

foodItemRouter.get('/:id', getSingleFoodItem);

module.exports = foodItemRouter;
