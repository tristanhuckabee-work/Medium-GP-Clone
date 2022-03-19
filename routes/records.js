var express = require('express');
var router = express.Router();
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
    if (ele.description.length >= 150) {
      ele.description = ele.description.slice(0, 147) + "...";
    } else {
      ele.description = ele.description.slice(0, 147);
    }
  })

  res.render('records', { records, pk });
});

router.get('/new', csrfProtection, requireAuth, async (req, res) => {
  const record = db.Record.build()
  const pk = req.session.auth.userId;

  res.render('newRecord', { record, pk, csrfToken: req.csrfToken() })
})

const recordVal = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for title')
    .isLength({ max: 50 })
    .withMessage('title cannot exceed character count of 50'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Description')
    .isLength({ max: 10000 })
    .withMessage('description cannot exceed character count of 10,000')
]
router.post('/new', csrfProtection, recordVal, requireAuth, asyncHandler(async (req, res) => {
  const { title, description } = req.body
  const record = db.Record.build({ title, description, userId: req.session.auth.userId })
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await record.save();
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('newRecord', {
      title,
      description,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}
))
router.get('/:id/edit', csrfProtection, recordVal, requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id
  const pk = req.session.auth.userId
  const user = await db.User.findByPk(pk)
  const record = await db.Record.findByPk(id)
  const { title, description } = record


  if (record.userId !== req.session.auth.userId) {
    res.redirect('/records')
  } else {
    res.render(`editRecord`, { title, description, csrfToken: req.csrfToken(), id, pk, user })
  }
}))
router.post('/:id/edit', csrfProtection, recordVal, requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id
  const record = await db.Record.findByPk(id)
  const { title, description } = req.body
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {

    record.title = title
    record.description = description
    await record.save()
    res.redirect('/records')
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('editRecord', {
      title,
      description,
      errors,
      id,
      csrfToken: req.csrfToken(),
    });
  }
}))

// GET specific record
router.get('/:id', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const pk = req.session.auth.userId
  // getting record info
  const record = await db.Record.findByPk(id, {
    include: 'User'
  })

  const likes = await db.Applaud.findAll({
    where: {recordId: id}
  })
  const likeCounter = likes.length

  // getting comments of record
  const comments = await db.Comment.findAll({
    where: {
      recordId: id
    },
    order: [['id', 'DESC']],
    include: 'User'
  })
  let isLiked = await db.Applaud.findAll({
    where: {
      recordId:id,
      userId:pk
    }
  });
  if(isLiked.length > 0){
    isLiked = true
  }else{
    isLiked = false
  }
  res.render('recordId', { record, comments, csrfToken: req.csrfToken(), pk, id, isLiked, likeCounter})
}))


router.delete('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res) => {
  const post = await db.Record.findByPk(req.params.id);
  if (post) {
    await post.destroy();
    res.json({ message: 'Success' });
  } else {
    res.json({ message: 'Failure' });
  }
}));

router.post('/applauds/new', requireAuth, asyncHandler( async(req, res, next) => {
  let {userId, recordId} = req.body

  const relation = await db.Applaud.findOne({
    where: { userId, recordId }
  });

  if (relation) {
    relation.destroy();
    res.json({msg: "User Unliked"});
  } else {
    await db.Applaud.create(req.body);
    res.json({msg: "User liked"});
  }
}));


module.exports = router
