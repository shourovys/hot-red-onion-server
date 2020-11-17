const express = require('express');
const {
    addOrderedFoodItem,
    getUserOrderedFoodItem,
    getCurrentOrderedFoodItem,
    getAllOrderedFoodItem
} = require('../Controllers/OrderControllers');

const orderedFoodItemRouter = express.Router();
orderedFoodItemRouter.post('/add', addOrderedFoodItem);

// orderedFoodItemRouter.get('/current', getCurrentOrderedStatus);

orderedFoodItemRouter.post('/all', getUserOrderedFoodItem);

orderedFoodItemRouter.get('/all', getAllOrderedFoodItem);

orderedFoodItemRouter.get('/:id', getCurrentOrderedFoodItem);

module.exports = orderedFoodItemRouter;
