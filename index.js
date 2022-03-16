const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./server/db");
const userRoutes = require("./server/routes/users");
const authRoutes = require("./server/routes/auth");
const actionRoutes = require("./server/routes/actions");
const articlesRoutes = require("./server/routes/articles");
const parrainesRoutes = require("./server/routes/parraines");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const Articles = require("./server/models/articles");

const multer = require("multer");

require("dotenv").config({ path: "./server/.env" });

// DATABASE CONNECTION
connection();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/parraines", parrainesRoutes);

// OPTION PARAMETRE SWAGGER
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation of the API for GNO-FAR",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./index.js"],
};

//COMPONTENTS SCHEMA ARTICLE FOR SWAGGER
/**
 * @swagger
 *  components:
 *      schemas:
 *          Article:
 *              type: object
 *              required:
 *                  - title
 *                  - subTitle
 *                  - contenu
 *              properties:
 *                  user_id:
 *                      type: string
 *                      description: The id automaticaly created
 *                  title:
 *                      type: string
 *                      description: the article title
 *                  subTitle:
 *                      type: string
 *                      description: This is the subTitle
 *                  contenu:
 *                      type: string
 *                      description: This is the content
 *                  articleImage:
 *                      type: string
 *                      description: This the image
 *              example:
 *                  user_id: d5fE_aFgregeg11245
 *                  title: Hello tout le monde test de swagger
 *                  subTitle: GGGGG
 *                  contenu: Yoyoyoy
 *                  articleImage: fleur.jpeg
 */

//COMPONTENTS SCHEMA ACTIONS
/**
 * @swagger
 *  components:
 *      schemas:
 *          Action:
 *              type: object
 *              required:
 *                  - title
 *                  - content
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the action title
 *                  content:
 *                      type: string
 *                      description: This is the content
 *              example:
 *                  title: Hello tout le monde test de swagger
 *                  content: Un enfant du Senegal
 */

//PARAMETRE TO GET ALL ARTICLES WITH SWAGGER
/**
 * @swagger
 *  /:
 *      get:
 *          summary: Returns the list of all the articles
 *          tags: [Articles]
 *          description: This Api is use to check if get method is working or not.
 *          responses:
 *              200:
 *                  description: To test get Method
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#components/schemas/Article'
 */
app.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((error) => res.status(400).json(`Error ${error}`));
});

//PARAMETER TO GET THE ARTICLE BY ID
/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: The article description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: The article was not found
 */
//REQUEST FIND ARTICLE BY ID
// app.get("/:id", (req, res) => {
//     Articles.findById(req.params.id)
//         .then(article => res.status(200).json({article:article, ok:"Article is found"}))
//         .catch(error => res.status(400).json(`Error: ${error}`))
// })

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: The article is successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       500:
 *         description: Some server error
 */

const upload = multer({
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});
app.post("/add", upload.single("articleImage"), (req, res) => {
  let article = {
    user_id: req.body.user_id,
    title: req.body.title,
    subTitle: req.body.subTitle,
    contenu: req.body.contenu,
    tags: req.body.tags,
    status: req.body.status,
    createdAt: req.body.createdAt,
    updateAt: req.body.updateAt,
  };
  if (req.file && req.file.filename) article.articleImage = req.file.filename;

  const newArticle = new Articles(article);
  newArticle
    .save()
    .then(() => res.json("The new article added successfully!!!"))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

//PARAMETER TO UPDATE AN ARTICLE
/**
 * @swagger
 * /update/{id}:
 *  put:
 *    summary: Update the article by the id
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The article id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Article'
 *    responses:
 *      200:
 *        description: The article is updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Article'
 *      404:
 *        description: The article was not found
 *      500:
 *        description: Some error happened
 */

//REQUEST FIND ARTICLE BY ID AND UPDATE
app.put("/update/:id", upload.single("articleName"), (req, res) => {
  Articles.findById(req.params.id)

    .then((article) => {
      const IS_EDITED = "edited";
      article.title = req.body.title;
      article.subTitle = req.body.subTitle;
      article.contenu = req.body.contenu;
      article.image = req.body.image;
      article.status = IS_EDITED;
      article.updatedAt = Date.now();
      if (req.file && req.file.filename)
        article.articleImage = req.file.filename;

      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: "Article is updated successfully!!" })
        )
        .catch((error) => res.status(400).json(`Error: ${error}`));
    })
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

//PARAMETER TO DELETE ARTICLE
/**
 * @swagger
 * /delete/{id}:
 *   put:
 *     summary: Update the article as isDeleted = true
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *
 *     responses:
 *       200:
 *         description: The article is deleted
 *       404:
 *         description: The article was not found
 */
//MODIFY VALUE OF FALSE IF DELETED
app.put("/delete/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => {
      const IS_DELETED = true;
      const DELETED = "deleted";
      article.status = DELETED;
      article.updatedAt = Date.now();
      article.isDeleted = IS_DELETED;
      article
        .save()
        .then(() =>
          res
            .status(200)
            .json({ article: article, ok: "L'article est supprimée" })
        );
    })
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "app/build")));
  app.get("*", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "app/build", "index.html"));
  });
}

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Listening on PORT ${PORT}...🤓🤓🤓🤓🤓🤓🤓`)
);
