const express = require("express")
const router = express.Router()
const multer = require("multer")
const Actions = require("../models/actions")

// Get all acions
router.get("/actions", (req, res) => {
    Articles.find()
        .then((action) => {
            res.json(action)
        }).catch((err) => {
            res.status(400).json(`Error: ${err}`)
        });
})


