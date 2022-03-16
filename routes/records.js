var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, logoutUser, loginUser } = require('../auth');

router.get('/', requireAuth, async(req, res) => {
    const pk = req.session.auth.userId
    const records = await db.Record.findAll({
      include: 'User'
    })
    res.render('records', {records, pk});
  });

router.get('/new', requireAuth, async(req,res) => {
    
    res.render('form', {})
})

  module.exports = router
