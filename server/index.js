const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const actionRoutes = require('./routes/actions')
const articlesRoutes = require('./routes/articles')
const parrainesRoutes = require('./routes/parraines')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const Articles = require('./models/articles')
const path = require('path')

require('dotenv').config()

// DATABASE CONNECTION
connection()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/actions', actionRoutes)
app.use('/api/articles', articlesRoutes)
app.use('/api/parraines', parrainesRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'app/build')))
  app.get('*', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'app/build', 'index.html'))
  })
}

/* const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); */

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Listening on PORT ${PORT}...🤓🤓🤓🤓🤓🤓🤓`)
)
