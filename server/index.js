const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const actionRoutes = require('./routes/actions')
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


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

