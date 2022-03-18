var express = require('express');
var router = express.Router();
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, handleValidationErrors } = require('./utils');
const { requireAuth, logoutUser, loginUser } = require('../auth');

// comments validator
const commentsVal=[
    check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a message for comment')
    .isLength({max: 255})
    .withMessage('comments can only hold 255 characters')
  ]

  //  Front end API for POST
  router.post('/',
  commentsVal,
  requireAuth,
  handleValidationErrors,
  asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {recordId, userId, description} = req.body;
    const usern = await db.User.findByPk(userId)
    const comment = await db.Comment.create({
        description,
        recordId,
        userId,
    })
    console.log(comment)
    res.json({message: 'success!', userName: usern.userName});
    res.end()
  }))


module.exports = router;
