const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const foodItemRouter = require('./Routers/FoodItemRouter');
const orderedFoodItemRouter = require('./Routers/OrderRouter');
const adminEmailRouter = require('./Routers/AdminRouter');

const app = express();
dotenv.config()
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));

app.get('/',(req,res)=>{
    res.send('welcome to red onion')
})

const PORT = process.env.PORT || 4000
mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(PORT))
    .catch((err) => console.log(err));
 
app.use('/foodItem', foodItemRouter);
app.use('/order', orderedFoodItemRouter);
app.use('/admin', adminEmailRouter);

mongoose.set('useFindAndModify', false);
