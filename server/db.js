const mongoose = require('mongoose')
const { MONGODB } = require('./config')

// Para resolver depreciaciones https://mongoosejs.com/docs/deprecations.html
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})
