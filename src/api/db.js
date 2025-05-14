const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Conexión a MongoDB exitosa"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

module.exports = mongoose;
