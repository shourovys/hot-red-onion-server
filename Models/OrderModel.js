const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        userEmail: {
            type: String,
            required: true
        },
        allDeliveryData: {
            type: Object,
            required: true
        },
        cart: {
            type: Array,
            required: true
        },
        orderActiveStep: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const OrderedFoodItem = mongoose.model('orderedFoodItem', orderSchema);

module.exports = OrderedFoodItem;
