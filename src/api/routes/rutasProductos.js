const express = require("express")
const Producto = require("../models/producto")

const rutas = express.Router()

rutas.get("/", async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
})

rutas.get("/:id", async (req, res) => {
  const producto = await Producto.findById(req.params.id)
  res.json(producto)
})

rutas.post("/", async (req, res) => {
  const { nombre, descripcion, sku, cantidad } = req.body
  const producto = new Producto({ nombre, descripcion, sku, cantidad })
  await producto.save()
  res.json({status: "producto creado"})
})

rutas.put("/:id", async (req, res) => {
  const { nombre, descripcion, sku, cantidad } = req.body
  await Producto.findByIdAndUpdate(req.params.id, { nombre, descripcion, sku, cantidad })
  res.json({status: "producto actualizado"})
})

rutas.delete("/:id", async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id)
  res.json({status: "producto eliminado"})
})

module.exports = rutas