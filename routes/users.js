var express = require('express');
var router = express.Router();
const db = require('../db/models')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser } = require('../auth');


/* GET users listing. */
router.get('/:id', csrfProtection, (req, res, next) => {
  if(res.locals.authenticated){
    const pk = req.session.auth.userId
    console.log(pk)
    res.render('users', { pk })
  }else{
    res.redirect('/');
  }
});

module.exports = router;
