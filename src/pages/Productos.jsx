import React, { useEffect, useState } from "react";
import axios from "axios";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEditar from "../components/FormularioEditar";
import Alerta from "../components/Alerta";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");

  const cargarProductos = () => {
    axios
      .get("http://localhost:5000/api/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setMensaje("No se pudieron cargar los productos.");
        setTipoMensaje("error");
      });
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje(texto);
    setTipoMensaje(tipo);
    setTimeout(() => setMensaje(null), 3000);
  };

  const eliminarProducto = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      axios
        .delete(`http://localhost:5000/api/productos/${id}`)
        .then(() => {
          cargarProductos();
          mostrarMensaje("Producto eliminado correctamente.");
        })
        .catch((err) => {
          console.error("Error al eliminar producto:", err);
          mostrarMensaje("No se pudo eliminar el producto.", "error");
        });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestión de Productos</h2>

      {mensaje && <Alerta mensaje={mensaje} tipo={tipoMensaje} />}

      {!productoEditar ? (
        <FormularioProducto
          onProductoCreado={() => {
            cargarProductos();
            mostrarMensaje("Producto creado exitosamente.");
          }}
        />
      ) : (
        <FormularioEditar
          producto={productoEditar}
          onEditSuccess={() => {
            cargarProductos();
            setProductoEditar(null);
            mostrarMensaje("Producto actualizado exitosamente.");
          }}
          onCancel={() => setProductoEditar(null)}
        />
      )}

      <table className="min-w-full table-auto border border-gray-200 shadow mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Precio</th>
            <th className="px-4 py-2 border">Stock</th>
            <th className="px-4 py-2 border text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td className="px-4 py-2 border">{producto.nombre}</td>
              <td className="px-4 py-2 border">${producto.precio}</td>
              <td className="px-4 py-2 border">{producto.stock}</td>
              <td className="px-4 py-2 border text-center space-x-2">
                <button
                  onClick={() => setProductoEditar(producto)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarProducto(producto._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
