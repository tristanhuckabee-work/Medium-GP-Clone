var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
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
  csrfProtection,
  requireAuth,
  handleValidationErrors,
  asyncHandler(async(req,res)=>{
    const {description, recordId, userId} = req.body;
    const comment = db.Comment.build({
        description,
        recordId,
        userId,
    })
    await comment.save()
    res.json({message: 'success!'});
  }))

// router.post('/', commentsVal, csrfProtection, requireAuth, handleValidationErrors,
// asyncHandler(async(req,res) =>{
//     const {description} = req.body;
//     res.json({message: description}).end()
// }))


module.exports = router;
