var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser, loginUser } = require('../auth');

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home', csrfToken: req.csrfToken()});
});

const loginValidators = [
  check('userName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Username'),
  check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password'),
];

router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  let errors = [];

  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty() ) {
    const user = await db.User.findOne({
      where: {
        userName
      }
    });

    if (user) {
      const passwordMatched = await bcrypt.compare(password, user.hashedPassword.toString() );
      if (passwordMatched) {
        loginUser(req, res, user);
        res.redirect('/records');
      }
    }

    errors.push('Sign In Failed, Username and Password did not match');

  } else {
    errors = validatorErrors.array().map(error => error.msg);
    res.render('index', {errors, csrfToken: req.csrfToken(), userName});
  }

}));

router.get('/records', (req, res) => {
  res.render('records.pug', {});
});


module.exports = router;
