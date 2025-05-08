import React from "react";

const Nosotros = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre Nosotros</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src="/nosotros-img.png"
          alt="Equipo desarrollador"
          className="w-80 rounded shadow-lg"
        />
        <div className="max-w-md text-gray-700">
          <p>
            Somos el Grupo 13 de la UNAB, estudiantes comprometidos con la creación de soluciones digitales. Este sistema fue desarrollado como parte de nuestro Taller de Desarrollo Web.
          </p>
          <p className="mt-4">
            Buscamos aplicar tecnologías modernas para mejorar los procesos de inventario en PYMES utilizando inteligencia artificial y herramientas web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
