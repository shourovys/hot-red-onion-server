const FoodItem = require('../Models/FoodItemsModel');

const foodItemController = {};

foodItemController.addFoodItem = (req, res) => {
    const foodItem = new FoodItem(req.body);
    foodItem
        .save()
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    res.send('success');
};

foodItemController.getAllFoodItem = (req, res) => {
    console.log('come');
    FoodItem.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

foodItemController.getSingleFoodItem = (req, res) => {
    const { id: _id } = req.params;
    FoodItem.findById(_id)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

foodItemController.getSameCategoryFoods = (req, res) => {
    const { category } = req.params;
    console.log(category);
    FoodItem.find({ category }, { img: 1, _id: 1 })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = foodItemController;
