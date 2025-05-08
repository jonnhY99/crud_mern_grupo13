const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/retailAI"

mongoose.connect(URI)
  .then(db => console.log("conectado!"))
  .catch(err => console.err(err))

module.exports = mongoose