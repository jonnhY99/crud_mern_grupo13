const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/crudgrupo13";

mongoose.connect(uri)
  .then(() => console.log("✅ Conexión a MongoDB exitosa"))
  .catch(err => console.error(err));
  
module.exports = mongoose