const _ = require('lodash');
const Joi = require('@hapi/joi');
const { User } = require('../model/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// POST - login
// returns JWT
router.post('/', async (req, res) => {
  // Validate request
  const { error } = validate(req.body);

  // return 400 incase of error
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // validate email & password
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password');

  // Get JWT Auth Token
  const token = user.getJwtAuthToken();
  res.send(token);
});

//Validate request input
function validate(req) {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });

  return schema.validate(req);
}

module.exports = router;
