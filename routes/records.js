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

router.get('/new', csrfProtection ,requireAuth, async(req,res) => {
    const record = db.Record.build()
    res.render('form', { record, csrfToken: req.csrfToken()})
})
const recordVal = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for title')
        .isLength({max: 50})
        .withMessage('title cannot exceed character count of 50'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Description')
        .isLength({max: 10000})
        .withMessage('description cannot exceed charcter count of 10,000')
]
router.post('/new',csrfProtection ,recordVal ,requireAuth, asyncHandler(async(req,res) => {
    const { title, description } = req.body
    console.log(title, description)
    const record = db.Record.build({ title, description, userId: req.session.auth.userId })
    await record.save()
    res.redirect('/')
    }
))

  module.exports = router