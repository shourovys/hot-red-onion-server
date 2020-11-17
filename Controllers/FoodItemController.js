const FoodItem = require('../Models/FoodItemsModel');

const foodItemController = {};

foodItemController.addFoodItem = (req, res) => {
    const foodItem = new FoodItem(req.body);
    foodItem
        .save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

foodItemController.getAllFoodItem = (req, res) => {
    FoodItem.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

foodItemController.getSingleFoodItem = (req, res) => {
    const { id } = req.params;
    FoodItem.findById(id)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = foodItemController;
