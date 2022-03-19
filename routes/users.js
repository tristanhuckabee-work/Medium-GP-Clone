var express = require('express');
var router = express.Router();
const db = require('../db/models')
const {sequelize, Sequelize: {Op}} = require('../db/models');
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

    records.forEach(ele => {
      if (ele.description.length >= 150) {
        ele.description = ele.description.slice(0, 147) + "...";
      } else {
        ele.description = ele.description.slice(0, 147);
      }
    })

    let following = await db.Follow.findAll({
      where: { followerId: id } });
    following = following.length;

    let followers = await db.Follow.findAll({
      where: { userId: id } });
    followers = followers.length;

    let isFollowed = await db.Follow.findAll({
      where: {
        followerId:pk,
        userId:id
      }
    })
    if (isFollowed.length > 0) isFollowed = true;
    else isFollowed = false;

    res.render('usersPage', { user, pk, records, following, followers, isFollowed})
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
