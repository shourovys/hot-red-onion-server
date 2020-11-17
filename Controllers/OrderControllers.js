const OrderedFoodItem = require('../Models/OrderModel');

const orderedFoodItemController = {};

orderedFoodItemController.addOrderedFoodItem = (req, res) => {
    const foodItem = new OrderedFoodItem(req.body);
    foodItem
        .save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getAllOrderedFoodItem = (req, res) => {
    OrderedFoodItem.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getUserOrderedFoodItem = (req, res) => {
    const { userToken } = req.body;
    OrderedFoodItem.find({ userToken })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.updateOrderedFoodItemStatus = (req, res) => {
    const { id } = req.params;
    const { activeStep } = req.body;
    OrderedFoodItem.findByIdAndUpdate(id, { activeStep })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = orderedFoodItemController;
