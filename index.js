const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./server/db");
const userRoutes = require("./server/routes/users");
const authRoutes = require("./server/routes/auth");
const actionRoutes = require("./server/routes/actions");
const articlesRoutes = require("./server/routes/articles");
const parrainesRoutes = require("./server/routes/parraines");
/* const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express') */
const Articles = require("./server/models/articles");
const path = require("path");
require("dotenv").config({ path: "./server/.env" });
/* require("./server/db"); */

const mongoose = require("mongoose");
/* require("dotenv").config(); */

/* module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URL_PRODUCTION, connectionParams);
    console.log("connected to mongoDB!");
  } catch (error) {
    console.log(error);
    console.log("There is a problem somewhere!");
  }
}; */

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "app/build")));
  app.get("*", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "app/build", "index.html"));
  });
}

/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static("app/build"))
  const path = require('path')
  app.get('*', function (req, res) {
    res.status(200).sendFile(path.resolve(__dirname,"app","build","index.html"))
  })
 */
/* const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); */

/* const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
}); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Listening on PORT ${PORT}...🤓🤓🤓🤓🤓🤓🤓`)
);
