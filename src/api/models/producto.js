const mongoose = require("mongoose")

const { Schema } = mongoose

const schemaProducto = new Schema({
  // este schema es solo de muestra. En la implementación este objeto será parte de un modelo mucho más complejo.
  nombre: { type: String, require: true },
  descripcion: { type: String, require: true },
  sku: { type: String, require: true },
  cantidad: { type: Number, require: true, min: 0 }
})

module.exports = mongoose.model("Producto", schemaProducto)