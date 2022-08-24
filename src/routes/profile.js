const express = require('express');
const route = express.Router();

const profileController = require('../app/controllers/ProfileController');

route.get('/courses', profileController.get);
route.get('/trash', profileController.trash);

module.exports = route;
