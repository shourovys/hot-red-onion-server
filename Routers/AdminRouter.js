const express = require('express');
const { addAdmin, isAdmin } = require('../Controllers/AdminController');

const adminEmailRouter = express.Router();

adminEmailRouter.post('/add/:adminEmail', addAdmin);
adminEmailRouter.get('/find/:userEmail', isAdmin);

module.exports = adminEmailRouter;
