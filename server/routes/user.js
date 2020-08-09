const asyncMiddleware = require('../middleware/async');
const auth = require('../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User, validate } = require('../model/user');
const express = require('express');
const router = express.Router();

// GET Users
router.get('/', auth, async (req, res) => {
  const users = await User.find()
    .sort()
    .select('-password');
  res.json(users);
});

// GET User by id
router.get('/:id', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

// POST User addition
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('User already registered');
  }

  user = new User(_.pick(req.body, ['name', 'email', 'password', 'mobile']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.getJwtAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;
