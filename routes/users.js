var express = require('express');
var router = express.Router();
const db = require('../db/models')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser } = require('../auth');


/* GET users listing. */
router.get('/:id', csrfProtection, async(req, res, next) => {
  if(res.locals.authenticated){
    const pk = req.session.auth.userId
    const id = req.params.id
    const user = await db.User.findByPk(id)
    const records = await db.Record.findAll({
      where: {
        userId: id
      }
    })
    res.render('users', { user, records, pk})
  }else{
    res.redirect('/');
  }
});

module.exports = router;
