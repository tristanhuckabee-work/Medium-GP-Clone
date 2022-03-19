var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, logoutUser, loginUser } = require('../auth');
const algo = require('../public/javascripts/theAlgo');

/* GET home page. */
router.get('/', csrfProtection, async (req, res) => {
  if (res.locals.authenticated) {
    res.redirect('/records')
  } else {
    const user = db.User.build();

    const trending = await algo();
    const rank = 1

    res.render('splashPage', { trending, user, csrfToken: req.csrfToken(), rank});
  }
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

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { userName } });

    //if user exists use bcrypt compare
    if (user !== null) {
      const passwordMatched = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatched) {
        loginUser(req, res, user);
        return res.redirect('/records');
      }
    }

    errors.push('Sign In Failed, Username and Password did not match');
  } else {
    errors = validatorErrors.array().map(error => error.msg);
  }
  const trending = await algo();
  const rank = 1
  res.render('splashPage', { errors, trending, csrfToken: req.csrfToken(), userName, rank });
}));

const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for userName')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
]
//Not sure what the route should be for sign up
router.post('/sign-up', csrfProtection, userValidators, asyncHandler(async (req, res, next) => {
  const { userName, password: passwordSignUp } = req.body;

  const userSignUp = db.User.build({
    userName,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(passwordSignUp, 10);
    userSignUp.hashedPassword = hashedPassword;
    await userSignUp.save();
    loginUser(req, res, userSignUp)
    res.redirect('/records');
  } else {
    const trending = await algo();
    const rank = 1
    const errorsSignup = validatorErrors.array().map(error => error.msg);
    res.render('splashPage', {
      title: 'filler',
      trending,
      userName,
      errorsSignup,
      rank,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.get('/logout', asyncHandler(async (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
}));

router.get('/demo-user', asyncHandler(async (req, res) => {
  const user = await db.User.findOne({
    where: {
      userName: 'John Doe'
    }
  });
  loginUser(req, res, user);
  res.redirect('/records');
}));

module.exports = router;
