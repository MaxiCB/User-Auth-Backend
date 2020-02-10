const { Router } = require('express');

const User = require('../models/User');

// Need to implemente .env for storing BD URL
const {
  API_KEY,
  DATABASE_URL,
} = process.env;

const router = Router();



router.get('/', async (req, res, next) => {
  try {
    const entries = await User.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (req.get('X-API-KEY') !== API_KEY) {
      res.status(401);
      throw new Error('UnAuthorized');
    }
    const user = new User(req.body);
    const createdEntry = await user.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;