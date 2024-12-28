const express = require('express');
const { register, login, protect, admin, employer, jobSeeker } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.get('/admin-dashboard', protect, admin, (req, res) => res.send('Welcome Admin'));
router.get('/employer-dashboard', protect, employer, (req, res) => res.send('Welcome Employer'));
router.get('/jobseeker-dashboard', protect, jobSeeker, (req, res) => res.send('Welcome Job Seeker'));

module.exports = router;