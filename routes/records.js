var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler, handleValidationErrors } = require('./utils');
const { requireAuth, logoutUser, loginUser } = require('../auth');

router.get('/', requireAuth, async (req, res) => {
  const pk = req.session.auth.userId
  const records = await db.Record.findAll({
    include: 'User',
    order: [['id', 'DESC']]
  })

  // limit the character description shown on records page
  records.forEach(ele => {
    ele.description = ele.description.slice(0, 147) + "...";
  })

  res.render('records', { records, pk });
});

router.get('/new', csrfProtection, requireAuth, async (req, res) => {
  const record = db.Record.build()
  res.render('form', { record, csrfToken: req.csrfToken() })
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
        .withMessage('description cannot exceed character count of 10,000')
]
router.post('/new',csrfProtection ,recordVal ,requireAuth, asyncHandler(async(req,res) => {
    const { title, description } = req.body
    console.log(title, description)
    const record = db.Record.build({ title, description, userId: req.session.auth.userId })
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await record.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map(error => error.msg);
      res.render('form', {
        title,
        description,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
    }
))
router.get('/:id/edit',requireAuth ,asyncHandler(async(req,res) => {
  const id = req.params.id
  const record = await db.Record.findByPk(id)
  if(record.userId !== req.session.auth.userId){
    res.redirect('/records')
  }else{
    const yes = `editing record number ${id}`
    res.render(`edit`, {yes})
  }
}))


// GET specific record
router.get('/:id', csrfProtection, requireAuth,asyncHandler(async(req,res) =>{
  const id = req.params.id;

  // getting record info
  const record = await db.Record.findByPk(id,{
    include: 'User'
  })
  // getting comments of record
  const comments = await db.Comment.findAll({
      where: {
        recordId: id
      },
      order: [['id', 'DESC']]
  })

  if(record.userId !== req.session.auth.userId){
    res.redirect("/records")
  } else {
    console.log(comments[0].id, "HEY THERE CHECK THIS OUT COMMENTS ID");
    res.render('recordId', { record, comments, csrfToken: req.csrfToken()})
  }
}))

// validator for commments
const commentsVal=[
  check('description')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a message for comment')
  .isLength({max: 255})
  .withMessage('comments can only hold 255 characters')
]

router.post('/:id/comments/:commentsId',
commentsVal,
csrfProtection,
requireAuth,
handleValidationErrors,
asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const {comment} = req.body;
  

}))
module.exports = router
