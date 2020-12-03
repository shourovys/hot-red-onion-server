const OrderedFoodItem = require('../Models/OrderModel');

const orderedFoodItemController = {};

orderedFoodItemController.addOrderedFoodItem = (req, res) => {
    const foodItem = new OrderedFoodItem(req.body);
    foodItem
        .save()
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
    const { id, activeStep } = req.params;
    console.log('activeStep', id, activeStep);
    OrderedFoodItem.findByIdAndUpdate(id, { orderActiveStep: activeStep }, { new: true })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getAllOrderedFoodItem = (req, res) => {
    OrderedFoodItem.find({ orderActiveStep: { $lte: 4 } })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getAllOrderedPriviesFoodItem = (req, res) => {
    OrderedFoodItem.find({ orderActiveStep: { $gte: 4 } })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getCurrentOrderedFoodItem = (req, res) => {
    const { userEmail } = req.params;

    OrderedFoodItem.find({ userEmail, orderActiveStep: { $lte: 4 } })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

orderedFoodItemController.getPriviesOrderedFoodItem = (req, res) => {
    const { userEmail } = req.params;
    console.log(userEmail);
    OrderedFoodItem.find({ userEmail, orderActiveStep: { $gte: 4 } })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = orderedFoodItemController;
