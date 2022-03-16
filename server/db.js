const mongoose = require('mongoose')

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  try {
    mongoose.connect(process.env.MONGO_URL, connectionParams)
    console.log('connected to mongoDB!')
  } catch (error) {
    console.log(error)
    console.log('There is a problem somewhere!')
  }
}
