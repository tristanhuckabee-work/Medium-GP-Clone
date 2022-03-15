var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser, loginUser } = require('../auth');

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home', csrfToken: req.csrfToken() });
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
    const user = await db.User.findOne({
      where: {
        userName
      }
    });

    if (user) {
      const passwordMatched = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatched) {
        loginUser(req, res, user);
        res.redirect('/records');
      } else errors.push('Sign In Failed, Username and Password did not match');
    }
  } else {
    errors = validatorErrors.array().map(error => error.msg);
    res.render('index', { errors, csrfToken: req.csrfToken(), userName });
  }

}));

router.get('/records', (req, res) => {
  res.render('records.pug', {});
});


const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
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
  const { userName, password } = req.body;

  const user = db.User.build({
    userName,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    res.redirect('/records');
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('sign-up', {
      title: 'filler',
      user,
      errors,
      csrfToken: req.csrfToken(),
    })
  }
}));

router.post('/logout', asyncHandler(async (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
}));

module.exports = router;
