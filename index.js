const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // importante si frontend y backend están separados
const { mongoose } = require("./src/api/db"); // ruta adaptada a tu estructura

const app = express();

app.set("port", process.env.PORT || 5000); // usar 5000 para backend, React usa 3000

app.use(morgan("dev"));
app.use(cors()); // permite que React (en otro puerto) acceda a la API
app.use(express.json());

// API de productos
app.use("/api/productos", require("./src/api/routes/rutasProductos"));

// Listener
app.listen(app.get("port"), () => {
  console.log(`✅ Servidor backend corriendo en puerto ${app.get("port")}`);
});
