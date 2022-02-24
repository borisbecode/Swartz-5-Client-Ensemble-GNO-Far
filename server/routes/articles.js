const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');
const { route } = require('./users');

//REQUEST GET ALL ARTICLES
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(error => res.status(400).json(`Error ${error}`))
})

//REQUESTS ADD NEW ARTICLE
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        subTitle: req.body.subTitle,
        content: req.body.content,
        image: req.body.image,
        date: req.body.date,
        emailUser: req.body.emailUser
    })

    newArticle.save()
        .then(() => res.json("The new article added successfully!!!"))
        .catch(error => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(error => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title;
            article.subTitle = req.body.subTitle;
            article.content = req.body.content;
            article.image = req.body.image;

            article
                .save()
                .then(() => res.json("The article is updated successfully!!"))
                .catch(error => res.status(400).json(`Error: ${error}`))
        })
        .catch(error => res.status(400).json(`Error: ${error}`))
})

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json("The article is deleted!!"))
        .catch(error => res.status(400).json(`Error: ${error}`))

})

module.exports = router;