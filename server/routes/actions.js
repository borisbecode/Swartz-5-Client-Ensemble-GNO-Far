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
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false);
            return cb(new Error('Seul les formats .png, .jpg and .jpeg sont admis!'));
        }
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false);
            return cb(new Error('Seul les formats .png, .jpg and .jpeg sont admis!'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 3
    }

})

// Get all actions
router.get("/", (req, res) => {
    Actions.find()
        .then((action) => {
            res.json(action)
        }).catch((err) => {
            res.status(400).json(`Error: ${err}`)
        });
})

// Get  actions  delete
router.get("/inactif", (req, res) => {
    Actions.find({ isDeleted: true }, function (err, action) {
        if (err) res.status(400).json(`Error: ${err}`)
        res.json(action)
    })
})

// Get  actions  not delete
router.get("/actif", (req, res) => {
    Actions.find({ isDeleted: false }, function (err, action) {
        if (err) res.status(400).json(`Error: ${err}`)
        res.json(action)
    })
})

// Add new action
router.post('/add', upload.single("image"), (req, res) => {

    const IS_PUBLISHED = 'published'

    let action = {
        title: req.body.title,
        content: req.body.content,
        location: req.body.location,
        link: req.body.location,
        status: IS_PUBLISHED,
        isDeleted: req.body.isDeleted,
    }
    if (req.file && req.file.filename) action.image = req.file.filename

    const newAction = new Actions(action)

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
            if (req.file && req.file.filename) action.image = req.file.filename
            action.status = IS_EDITED
            action.updatedAt = Date.now()
            action
                .save()
                .then(() => res.status(200).json({ action: action, ok: "L'action est mise à jour" }))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Find action by id and delete of db
// router.delete('/:id', (req, res) => {
//     Actions.findByIdAndDelete(req.params.id)
//         .then(() => res.json("L'action est supprimée"))
//         .catch(err => res.status(400).json(`Error: ${err}`))
// })

// Find action by id and delete = true (reste en backup dans la db)
router.put('/delete/:id', (req, res) => {
    Actions.findById(req.params.id)
        .then(action => {
            const IS_DELETED = true
            const DELETED = 'deleted'
            action.status = DELETED
            action.updatedAt = Date.now()
            action.isDeleted = IS_DELETED
            action
                .save()
                .then(() => res.status(200).json({ action: action, ok: "L'action est supprimée" }))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router