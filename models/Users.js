const mongoose = require('../db/connections')
const Schema = mongoose.Schema



module.exports = mongoose.model('Idea', Idea)

