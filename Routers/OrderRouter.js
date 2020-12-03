const express = require('express');
const {
    addOrderedFoodItem,
    // getUserOrderedFoodItem,
    updateOrderedFoodItemStatus,
    getAllOrderedFoodItem,
    getAllOrderedPriviesFoodItem,
    getCurrentOrderedFoodItem,
    getPriviesOrderedFoodItem
} = require('../Controllers/OrderControllers');

const orderedFoodItemRouter = express.Router();
orderedFoodItemRouter.post('/add', addOrderedFoodItem);

// orderedFoodItemRouter.post('/all', getUserOrderedFoodItem);

orderedFoodItemRouter.patch('/:id/:activeStep', updateOrderedFoodItemStatus);

orderedFoodItemRouter.get('/all', getAllOrderedFoodItem);

orderedFoodItemRouter.get('/privies/all', getAllOrderedPriviesFoodItem);

orderedFoodItemRouter.get('/current/:userEmail', getCurrentOrderedFoodItem);

orderedFoodItemRouter.get('/privies/:userEmail', getPriviesOrderedFoodItem);

module.exports = orderedFoodItemRouter;
