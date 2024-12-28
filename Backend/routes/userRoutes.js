const express = require('express');
const { getUsers, updateProfile, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../controllers/authController');
const router = express.Router();

router.get('/', protect, admin, getUsers);
router.put('/profile', protect, updateProfile);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
