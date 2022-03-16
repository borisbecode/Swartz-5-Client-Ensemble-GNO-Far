const express = require('express')
const router = express.Router()
const multer = require('multer')
const Parraines = require('../models/parraines')

// definis le storage pour l'image
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../app/public/uploads/')
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

// Get all childs
router.get('/', (req, res) => {
  Parraines.find()
    .then((action) => {
      res.json(action)
    })
    .catch((err) => {
      res.status(400).json(`Error: ${err}`)
    })
})

// Add new pics
router.post('/add', upload.single('image'), (req, res) => {
  const IS_PUBLISHED = 'published'

  let parraine = {
    childName: req.body.childName,
    status: IS_PUBLISHED,
    isDeleted: req.body.isDeleted,
    // image: req.file.filename
  }
  // pour que l'image ne soit pas required
  // if (req.file && req.file.filename) action.image = req.file.filename

  if (req.file.filename === 'undefined') {
    return new Error('Not Found')
  } else {
    parraine.image = req.file.filename
  }

  const newParraine = new Parraines(parraine)

  newParraine
    .save()
    .then(() => res.json('Nouvelle photo ajoutée'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
