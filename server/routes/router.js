const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const uploads = require('../middleware/upload')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', uploads.single('avatar'), controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', uploads.single('avatar'), controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route