const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodItemsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        shotDescription: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const FoodItem = mongoose.model('foodItem', foodItemsSchema);

module.exports = FoodItem;
