var express = require('express');
var router = express.Router();
const db = require('../db/models')
const {sequelize, Sequelize: {Op}} = require('../db/models');
// const Op = Sequelize.Op
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth, restoreUser, logoutUser } = require('../auth');


/* GET users listing. */
router.get('/:id', asyncHandler(async(req, res, next) => {
  if(res.locals.authenticated){
    const pk = req.session.auth.userId
    const id = req.params.id
    const user = await db.User.findByPk(id)
    const records = await db.Record.findAll({
      where: { userId: id } });
    
    // THESE ARE MY CHANGES
    const following = await db.Follow.findAll({
      where: { followerId: id } }).length;
    const followers = await db.Follow.findAll({
      where: { userId: id } }).length;
    // ------------------------------------

    res.render('users', { user, records, following, followers, pk})
  }else{
    res.redirect('/');
  }
}));


router.post('/follows/new', requireAuth, asyncHandler( async(req, res, next) => {
  let {userId, followerId} = req.body

  const relation = await db.Follow.findOne({
    where: { userId, followerId }
  });

  if (relation) {
    relation.destroy();
    res.json({msg: "User Unfollowed"});
  } else {
    await db.Follow.create(req.body);
    res.json({msg: "User Followed"});
  }
}));

module.exports = router;
