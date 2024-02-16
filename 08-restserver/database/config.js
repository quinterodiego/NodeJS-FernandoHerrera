const mongoose = require('mongoose')

const dbConnection = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  } catch (error) {
    throw new Error('Connection Database Error')
  }

}

modeule.exports = dbConnection