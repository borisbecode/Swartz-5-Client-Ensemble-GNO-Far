const express = require("express")
const router = express.Router()
const multer = require("multer")
const Actions = require("../models/actions")

// definis le storage pour l'image
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../app/public/uploads/")
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    }
})
// param pour multer
const upload = multer({ storage: storage })

// Get all acions
router.get("/", (req, res) => {
    Actions.find()
        .then((action) => {
            res.json(action)
        }).catch((err) => {
            res.status(400).json(`Error: ${err}`)
        });
})

// Add new action
router.post('/add', upload.single("image"), (req, res) => {

    const newAction = new Actions({
        title: req.body.title,
        content: req.body.content,
        location: req.body.location,
        link: req.body.location,
        image: req.file.filename,
        status: req.body.status,
        isDeleted: req.body.isDeleted,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    })

    newAction.save()
        .then(() => res.json('Nouvelle action ajoutée'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Find action by id
router.get('/:id', (req, res) => {
    Actions.findById(req.params.id)
        .then(action => res.json(action))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Find action by id and update
router.put('/update/:id', upload.single("image"), (req, res) => {
    Actions.findById(req.params.id)
        .then(action => {
            const IS_EDITED = 'edited'
            action.title = req.body.title
            action.content = req.body.content
            action.location = req.body.location
            action.link = req.body.link
            action.image = req.file.filename
            action.status = IS_EDITED

            action
                .save()
                .then(() => res.status(200).json({ action: action, ok: "L'action est mise à jour" }))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Find action by id and delete
router.delete('/:id', (req, res) => {
    Actions.findByIdAndDelete(req.params.id)
        .then(() => res.json("L'action est supprimée"))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router