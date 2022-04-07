const express = require('express')
const router = express.Router()
const multer = require('multer')
const Actions = require('../models/actions')
const checkAuth = require('../utils/checkAuth')
require('dotenv').config({ path: '../.env' })

// definis le storage pour l'image
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'app/public/uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
})
// param pour multer
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Seul les formats .png, .jpg and .jpeg sont admis!'))
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
})

// Get all actions
router.get('/', (req, res) => {
  Actions.find()
    .then((action) => {
      res.json(action)
    })
    .catch((err) => {
      res.status(400).json(`Error: ${err}`)
    })
})

// Get  actions  delete
router.get('/inactif', (req, res) => {
  Actions.find({ isDeleted: true }, function (err, action) {
    if (err) res.status(400).json(`Error: ${err}`)
    res.json(action)
  })
})

// Get  actions  not delete
router.get('/actif', (req, res) => {
  Actions.find({ isDeleted: false }, function (err, action) {
    if (err) res.status(400).json(`Error: ${err}`)
    res.json(action)
  })
})

// Add new action
router.post('/add', upload.single('image'), (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  const IS_PUBLISHED = 'published'

  let newUser = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    status: IS_PUBLISHED,
  }

  let action = {
    title: req.body.title,
    content: req.body.content,
    location: req.body.location,
    link: req.body.link,
    status: IS_PUBLISHED,
    isDeleted: req.body.isDeleted,
    users: [newUser],
    // image: req.file.filename
  }

  // pour que l'image ne soit pas required
  if (req.file && req.file.filename) action.image = req.file.filename

  // if (req.file.filename === 'undefined') {
  //   return new Error('Not Found')
  // } else {
  //   action.image = req.file.filename
  // }

  const newAction = new Actions(action)

  newAction
    .save()
    .then(() => res.json('Nouvelle action ajoutée'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Find action by id
router.get('/:id', (req, res) => {
  Actions.findById(req.params.id)
    .then((action) => res.json(action))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Find action by id and update
router.put('/update/:id', upload.single('image'), (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Actions.findById(req.params.id)
    .then((action) => {
      const IS_EDITED = 'edited'

      let newUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: IS_EDITED,
      }

      action.title = req.body.title
      action.content = req.body.content
      action.location = req.body.location
      action.link = req.body.link
      if (req.file && req.file.filename) action.image = req.file.filename
      action.status = IS_EDITED
      action.updatedAt = Date.now()
      action.users.push(newUser)
      action
        .save()
        .then(() =>
          res
            .status(200)
            .json({ action: action, ok: "L'action est mise à jour" })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Find action by id and delete of db
router.delete('/:id', (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Actions.findByIdAndDelete(req.params.id)
    .then(() => res.json("L'action est supprimée"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// Find action by id and delete = true (reste en backup dans la db)
router.put('/delete/:id', upload.single('image'), (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Actions.findById(req.params.id)
    .then((action) => {
      const IS_DELETED = true
      const DELETED = 'deleted'

      let newUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: DELETED,
      }

      action.status = DELETED
      action.updatedAt = Date.now()
      action.isDeleted = IS_DELETED
      action.users.push(newUser)
      action
        .save()
        .then(() =>
          res.status(200).json({ action: action, ok: "L'action est supprimée" })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
