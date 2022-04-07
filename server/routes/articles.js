const express = require('express')
const router = express.Router()
const Articles = require('../models/articles')
const multer = require('multer')
const { application } = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const checkAuth = require('../utils/checkAuth')
require('dotenv').config({ path: '../.env' })

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'app/public/uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
})
/* const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'app/build/uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname)
  },
}) */

/* if (process.env.NODE_ENV === 'production') {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'app/build/uploads/')
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + file.originalname)
    },
  })
} */

// PARAM MULTER
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

//REQUEST GET ALL ARTICLES
router.get('/', (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((error) => res.status(400).json(`Error ${error}`))
})

// Get  actions  delete
router.get('/inactif', (req, res) => {
  Articles.find({ isDeleted: true }, function (err, article) {
    if (err) res.status(400).json(`Error: ${err}`)
    res.json(article)
  })
})

// Get  actions  not delete
router.get('/actif', (req, res) => {
  Articles.find({ isDeleted: false }, function (err, article) {
    if (err) res.status(400).json(`Error: ${err}`)
    res.json(article)
  })
})

//REQUESTS ADD NEW ARTICLE
router.post('/add', upload.single('articleImage'), (req, res) => {
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

  let article = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    contenu: req.body.contenu,
    status: IS_PUBLISHED,
    isDeleted: req.body.isDeleted,
    createdAt: req.body.createdAt,
    updateAt: req.body.updateAt,
    users: [newUser],
  }
  if (req.file && req.file.filename) article.articleImage = req.file.filename

  const newArticle = new Articles(article)
  newArticle
    .save()
    .then(() => res.json('The new article added successfully!!!'))
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then((article) =>
      res.status(200).json({ article: article, ok: 'Article is found' })
    )
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id', upload.single('articleImage'), (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Articles.findById(req.params.id)

    .then((article) => {
      const IS_EDITED = 'edited'

      let newUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: IS_EDITED,
      }

      article.title = req.body.title
      article.subTitle = req.body.subTitle
      article.contenu = req.body.contenu
      if (req.file && req.file.filename)
        article.articleImage = req.file.filename
      article.status = IS_EDITED
      article.updatedAt = Date.now()
      article.users.push(newUser)

      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: "L'article est mise à jour" })
        )
        .catch((error) => res.status(400).json(`Error: ${error}`))
    })
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

//MODIFY VALUE OF FALSE IF DELETED
// router.put('/delete/:id', (req, res) => {
//   Articles.findById(req.params.id)
//     .then((article) => {
//       const IS_DELETED = true
//       const DELETED = 'deleted'
//       article.status = DELETED
//       article.updatedAt = Date.now()
//       article.isDeleted = IS_DELETED
//       article
//         .save()
//         .then(() =>
//           res
//             .status(200)
//             .json({ article: article, ok: "L'action est supprimée" })
//         )
//     })
//     .catch((error) => res.status(400).json(`Error: ${error}`))
// })

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete('/:id', (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json('The article is deleted!!'))
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

// Find action by id and delete = true (reste en backup dans la db)
router.put('/delete/:id', upload.single('articleImage'), (req, res) => {
  // protected routes
  context = req.headers
  const { username } = checkAuth(context)

  Articles.findById(req.params.id)
    .then((article) => {
      const IS_DELETED = true
      const DELETED = 'deleted'

      let newUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: DELETED,
      }

      article.status = DELETED
      article.updatedAt = Date.now()
      article.isDeleted = IS_DELETED
      article.users.push(newUser)
      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: "L'article est supprimée" })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
