# CRUD MERN Grupo 13 🚀

Aplicación web desarrollada con la pila MERN (MongoDB, Express, React, Node.js), orientada a la gestión de inventarios con funcionalidades completas de CRUD, diseño moderno y mejoras progresivas.

Actualmente levantada en render con la siguiente URL https://retailai.onrender.com/
---

## 📦 Características del proyecto

- ✅ Interfaz moderna basada en React + TailwindCSS
- ✅ Gestión completa de productos (Crear, Leer, Editar, Eliminar)
- ✅ Backend en Node.js con Express y MongoDB
- ✅ Enrutamiento SPA con React Router
- ✅ Alertas visuales de confirmación
- ✅ Integración de formularios reutilizables
- ✅ Código modular y escalable

---

## 🧭 Navegación

- `/` → Página principal con componentes visuales
- `/productos` → Vista CRUD con tabla, formulario de creación y edición

---

## 🔧 Tecnologías utilizadas

- Frontend: React, TailwindCSS, Axios, React Router
- Backend: Node.js, Express
- Base de datos: MongoDB
- Otros: Vite o Create React App (según configuración), Git, GitHub

---

## 📁 Estructura del proyecto

├── public/
├── src/
│ ├── api/ # Modelos, rutas y conexión DB
│ ├── components/ # Formularios, navbar, alertas
│ ├── pages/ # Vistas: Productos
│ ├── App.js # Configuración de rutas
│ └── styles.css # Estilos base


---

## ▶️ Cómo ejecutar localmente

1. Clona el repositorio:
```bash
git clone https://github.com/jonnhY99/crud_mern_grupo13.git
cd crud_mern_grupo13

2. Modificacion de archivos
En el archivo FormularioEditar.jsx
  Debes cambiar las lineas que tengan https://retailai-backend.onrender.com/api/productos/ por la linea http://localhost:5000/api/productos/
  Debes realizar lo mismo en el archivo FormularioProducto.jsx

Reemplaza el codigo de db.js por el siguiente:
const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/crudgrupo13";

mongoose.connect(uri)
  .then(() => console.log("✅ Conexión a MongoDB exitosa"))
  .catch(err => console.error(err));
  
module.exports = mongoose
  
module.exports = mongoose
--GUARDA Y CIERRA EL ARCHIVO--

MODIFICA EL ARCHIVO Productos.jsx
Debes cambiar las lineas que tengan https://retailai-backend.onrender.com/api/productos/ por la linea http://localhost:5000/api/productos/

GUARDA TUS NUEVOS ARCHIVOS Y LUEGO PASA AL PUNTO 3 PARA LA INSTALACION.

3. Instalar dependencias
# 1 terminal frontend
cd cd crud_mern_grupo13
npm install
npm start

# 2 terminal backend
cd crud_mern_grupo13
npm run server

Contribuciones
Proyecto realizado por el Grupo 13 como parte del Taller de Desarrollo Web.

Contacto
Para más información o consultas técnicas, puedes abrir un issue o enviar un correo a los desarrolladores del grupo.
