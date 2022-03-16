var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth,logoutUser , loginUser } = require('../auth');

/* GET home page. */
router.get('/', csrfProtection, (req, res) => {
  if(res.locals.authenticated){
    res.redirect('/records')
  }else{
    const user = db.User.build();
    res.render('index', { user, csrfToken: req.csrfToken() });
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
  console.log('\nthis is the req.body', req.body, '\n')
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
  console.log('\nthis is the userName', userName, '\n')
  res.render('index', { errors, csrfToken: req.csrfToken(), userName });
}));

router.get('/records', requireAuth, async(req, res) => {
  const records = await db.Record.findAll({
    include: 'User'
  })

  res.render('records', {records});
});


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
  // console.log('\nthis is req.body', req.body);
  const { userName, password: passwordSignUp } = req.body;

  console.log(userName, passwordSignUp)

  const userSignUp = db.User.build({
    userName,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    console.log('\nthis is if validatorErrors is empty')
    const hashedPassword = await bcrypt.hash(passwordSignUp, 10);
    userSignUp.hashedPassword = hashedPassword;
    await userSignUp.save();
    loginUser(req, res, userSignUp)
    res.redirect('/records');
  } else {
    console.log('\nthis is if validatorErros isn\'t empty');
    const errorsSignup = validatorErrors.array().map(error => error.msg);
    res.render('index', {
      title: 'filler',
      userName,
      errorsSignup,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.post('/logout', asyncHandler(async (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
}));

router.post('/demo-user', asyncHandler(async (req, res) => {
  const user = await db.User.findOne({
    where: {
      userName: 'John Doe'
    }
  });
  loginUser(req, res, user);
  res.redirect('/records');
}));

module.exports = router;
