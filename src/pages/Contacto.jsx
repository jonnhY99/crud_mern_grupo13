import React, { useState } from "react";

const Contacto = () => {
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (mensaje.trim() !== "") {
      alert("📨 Correo enviado exitosamente a info@retailai.com");
      setMensaje("");
    } else {
      alert("⚠️ Por favor ingresa un mensaje antes de enviar.");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Contáctanos</h1>
      <form
        onSubmit={manejarEnvio}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow"
      >
        <label className="block mb-2 font-medium">Mensaje</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded mb-4"
          rows="6"
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
