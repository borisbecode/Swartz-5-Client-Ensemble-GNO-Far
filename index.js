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
const path = require("path");

require("dotenv").config();

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

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "node JS API Project for mongoDB",
      version: "1.0.0",
    },
    servers: [
      {
        url: process.env.CLIENT_URL,
      },
    ],
  },
  apis: ["./index.js"],
};

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
app.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((error) => res.status(400).json(`Error ${error}`));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/app/build")));
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
