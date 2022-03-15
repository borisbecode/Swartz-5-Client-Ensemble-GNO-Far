const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const actionRoutes = require('./routes/actions')
const articlesRoutes = require('./routes/articles');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const Articles = require('../server/models/articles');
const Actions = require("../server/models/actions");

const multer = require('multer');


require("dotenv").config();



// DATABASE CONNECTION 
connection();

// MIDDLEWARE
app.use(cors());
app.use(express.json())

// ROUTES 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/articles", articlesRoutes);

const options = {
    definition: {
        openapi : '3.0.0',
        info : {
            title: 'Documentation of the API for GNO-FAR',
            version: '1.0.0'
        },
        servers: [
            {
               url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./index.js']
}

//PARAMETRE TO GET ALL ARTICLES WITH SWAGGER
/**
 * @swagger
 *  /:
 *      get:
 *          summary: 
 *          description: This Api is use to check if get method is working or not.
 *          responses:
 *              200:
 *                  description: To test get Method
 */
app.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(error => res.status(400).json(`Error ${error}`))
});
//PARAMETRE TO GET ALL ARTICLES WITH SWAGGER
/**
 * @swagger
 *  /actions:
 *      get:
 *          summary: 
 *          description: This Api is use to check if get method is working or not.
 *          responses:
 *              200:
 *                  description: To test get Method
 */
 app.get("/", (req, res) => {
    Actions.find()
        .then((action) => {
            res.json(action)
        }).catch((error) => {
            res.status(400).json(`Error: ${error}`)
        });
})


/**
 * @swagger
 *  /add:
 *      post:
 *          summary: 
 *          description: This Api is use to check if get method is working or not.
 *          responses:
 *              200:
 *                  description: To test POST Method
 */
const upload = multer({
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 3
    }

})
app.post('/add', upload.single("articleImage"), (req, res) => {
    let article = {
        user_id: req.body.user_id,
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
    newArticle.save()
        .then(() => res.json("The new article added successfully!!!"))
        .catch(error => res.status(400).json(`Error: ${error}`))
})

/**
 * @swagger
 *  /update/:id:
 *      put:
 *          summary: 
 *          description: This Api is use to check if get method is working or not.
 *          responses:
 *              200:
 *                  description: To test UPDATE Method
 */
 app.put("/update/:id", upload.single("articleName"), (req, res) => {
    Articles.findById(req.params.id)
    
        .then(article => {
            const IS_EDITED = 'edited'
            article.title = req.body.title;
            article.subTitle = req.body.subTitle;
            article.contenu = req.body.contenu;
            article.image = req.body.image;
            article.status = IS_EDITED;
            action.updatedAt = Date.now()
            if (req.file && req.file.filename) article.articleImage = req.file.filename


            article
                .save()
                .then(() => res.status(200).json({article:article, ok:"Article is updated successfully!!"}))
                .catch(error => res.status(400).json(`Error: ${error}`))
        })
        .catch(error => res.status(400).json(`Error: ${error}`))
})

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...🤓🤓🤓🤓🤓🤓🤓`));

