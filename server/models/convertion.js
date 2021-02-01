const mongoose = require('mongoose')

const convertionSchema = new mongoose.Schema({
  success: Boolean,
  query: Object,
  result: Number
}, {
  timestamps: true
})

const Convertion = mongoose.model('convertions', convertionSchema)

module.exports = Convertion
