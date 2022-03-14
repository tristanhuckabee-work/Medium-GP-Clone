var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser, requireAuth } = require('../auth');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
