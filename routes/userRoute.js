const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

router.route('/register').post(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error creating user' });
  }
});

module.exports = router;
