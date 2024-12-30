const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
