const express = require('express');
const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router();
const saltRounds = 10;
const secret = 'academeez';

/* GET users listing. */
router.post('/login', async function(req, res) {
  let user, passwordValidated;
  try {
    user = await User.findOne({where: {email: req.body.email}});
  } catch(err) {
    return res.status(401).json({error: 'invalid credentials'})
  }
  if (!user) {
    return res.status(401).json({error: 'invalid credentials'})
  }

  passwordValidated = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValidated) return res.status(401).json({error: 'Bad Credentials'});
  jwt.sign({ userId: user.id }, secret, function(err, token) {
    if (err) {
      return res.status(500).json({error: 'Failed to create JWT'})
    }
    return res.status(202).json({token});
  });
});

router.post('/register', function(req, res) {
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    try {
      const user = await User.create({...req.body, password: hash});
      jwt.sign({ userId: user.id }, secret, function(err, token) {
        if (err) {
          return res.status(500).json({error: 'Failed to create JWT'})
        }
        return res.status(201).json({token});
      });
    } catch(err) {
      try {
        return res.status(500).json({error: err.errors[0].message});
      } catch(err2) {
        return res.status(500).json({error: err.message});
      }
    }
  });
});



module.exports = router;

