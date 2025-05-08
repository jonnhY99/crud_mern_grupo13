import React from "react";

const Alerta = ({ mensaje, tipo = "success" }) => {
  const colores = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  return (
    <div className={`border px-4 py-3 rounded relative mb-4 ${colores[tipo]}`} role="alert">
      <strong className="font-bold capitalize">{tipo}:</strong>
      <span className="block sm:inline ml-2">{mensaje}</span>
    </div>
  );
};

export default Alerta;
