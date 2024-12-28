const express = require('express');
const { protect, admin, employer, jobSeeker } = require('./middleware/authMiddleware');
const router = express.Router();

// Admin-specific route
router.get('/admin', protect, admin, (req, res) => {
  res.status(200).json({ message: 'Admin data', user: req.user });
});

// Employer-specific route
router.get('/employer', protect, employer, (req, res) => {
  res.status(200).json({ message: 'Employer data', user: req.user });
});

// JobSeeker-specific route
router.get('/jobseeker', protect, jobSeeker, (req, res) => {
  res.status(200).json({ message: 'JobSeeker data', user: req.user });
});

module.exports = router;
