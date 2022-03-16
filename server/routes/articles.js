const express = require('express')
const router = express.Router()
const Articles = require('../models/articles')
const multer = require('multer')
const { application } = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

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
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
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

//REQUESTS ADD NEW ARTICLE
router.post('/add', upload.single('articleImage'), (req, res) => {
  let article = {
    /* id: req.body.user_id, */
    title: req.body.title,
    subTitle: req.body.subTitle,
    contenu: req.body.contenu,
    tags: req.body.tags,
    status: req.body.status,
    createdAt: req.body.createdAt,
    updateAt: req.body.updateAt,
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
router.put('/update/:', upload.single('articleName'), (req, res) => {
  Articles.findById(req.params.id)

    .then((article) => {
      const IS_EDITED = 'edited'
      article.title = req.body.title
      article.subTitle = req.body.subTitle
      article.contenu = req.body.contenu
      article.image = req.body.image
      article.status = IS_EDITED
      article.updatedAt = Date.now()
      if (req.file && req.file.filename)
        article.articleImage = req.file.filename

      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: 'Article is updated successfully!!' })
        )
        .catch((error) => res.status(400).json(`Error: ${error}`))
    })
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

//MODIFY VALUE OF FALSE IF DELETED
router.put('/delete/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => {
      const IS_DELETED = true
      const DELETED = 'deleted'
      article.status = DELETED
      article.updatedAt = Date.now()
      article.isDeleted = IS_DELETED
      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: "L'action est supprimée" })
        )
    })
    .catch((error) => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID AND DELETE
// router.delete("/:id", (req, res) => {
//     Articles.findByIdAndDelete(req.params.id)
//         .then(() => res.json("The article is deleted!!"))
//         .catch(error => res.status(400).json(`Error: ${error}`))

// })

module.exports = router
