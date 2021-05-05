const express = require('express');
const Task = require('../models').Task;
const passport = require('passport');

const router = express.Router();

router.get('', passport.authenticate('jwt', {session: false}), async function(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
});

router.get('/unsecure', async function(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
});

module.exports = router;