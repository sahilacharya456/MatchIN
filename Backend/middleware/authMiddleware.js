const jwt = require('jsonwebtoken');
const User = require('../model/User');


exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }
  if (!token) res.status(401).json({ message: 'Not authorized, no token' });
};

exports.admin = (req, res, next) => {
  if (req.user && req.user.role === 'Admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

exports.employer = (req, res, next) => {
  if (req.user && req.user.role === 'Employer') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an employer' });
  }
};


exports.jobSeeker = (req, res, next) => {
  if (req.user && req.user.role === 'JobSeeker') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as a job seeker' });
  }
};
