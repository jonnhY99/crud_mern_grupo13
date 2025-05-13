import React, { useState } from "react";
import axios from "axios";

const FormularioProducto = ({ onProductoCreado }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = {
        nombre,
        precio: Number(precio),
        stock: Number(stock),
      };
      await axios.post("https://retailai.onrender.com/api/productos", nuevoProducto);
      setNombre("");
      setPrecio("");
      setStock("");
      if (onProductoCreado) onProductoCreado();
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="space-y-4 mb-6">
      <h3 className="text-xl font-semibold">Agregar nuevo producto</h3>
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear producto
      </button>
    </form>
  );
};

export default FormularioProducto;
