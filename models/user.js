

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  province: {
    type: String
  }
}, { collection: 'user', versionKey: false})

module.exports = mongoose.model('user', userSchema)