const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const foodItemRouter = require('./Routers/FoodItemRouter');
const orderedFoodItemRouter = require('./Routers/OrderRouter');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// eslint-disable-next-line prettier/prettier
const dbURL = 'mongodb+srv://readRight:readRight@cluster0.vb8a7.mongodb.net/newRedOnion?retryWrites=true&w=majority';
mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(4000))
    .catch((err) => console.log(err));

app.use('/foodItem', foodItemRouter);
app.use('/order', orderedFoodItemRouter);
