const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
  name: {

  },
  age: {
    type: Number,
    min: 0,
  },
  breed: String,
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet