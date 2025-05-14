import React, { useEffect, useState } from "react";
import axios from "axios";

const FormularioEditar = ({ producto, onCancel, onEditSuccess }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setStock(producto.stock);
    }
  }, [producto]);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const actualizado = { nombre, precio, stock };
      await axios.put(`https://retailai-backend.onrender.com/api/productos/${producto._id}`, actualizado);
      if (onEditSuccess) onEditSuccess();
    } catch (error) {
      console.error("Error al editar producto:", error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="space-y-4 mb-6 bg-gray-50 p-4 border rounded">
      <h3 className="text-lg font-semibold">Editar producto</h3>
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
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Guardar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioEditar;
