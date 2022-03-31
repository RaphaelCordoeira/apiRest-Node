const mongoose = require('mongoose')

//Modelo do banco

const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person