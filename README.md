# DevJourney Blog

DevJourney Blog es un proyecto de blog diseñado para compartir publicaciones relacionadas con tecnología, desarrollo de software y buenas prácticas. Este proyecto utiliza **Node.js** junto con **Express** y **EJS** como motor de plantillas para renderizar páginas dinámicas.

## Características

- 🌟 Gestión de publicaciones dinámicas con EJS.
- 🔒 Autenticación y autorización utilizando JWT.
- 🛠️ Integración con TinyMCE para un editor enriquecido de texto.
- 🚀 API optimizada para manejar operaciones CRUD.
- 🌐 Uso de middlewares personalizados para manejo de errores y redirección a páginas 404.
- 📊 Soporte para CORS y métodos HTTP adicionales con method-override.

---

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo backend.
- **Express**: Framework web rápido y minimalista.
- **EJS**: Motor de plantillas para renderizar páginas HTML dinámicas.
- **JWT (jsonwebtoken)**: Implementación segura de autenticación basada en tokens.
- **TinyMCE**: Editor de texto enriquecido.
- **Morgan**: Middleware para registro de solicitudes HTTP.
- **Method-Override**: Para permitir métodos HTTP PUT y DELETE desde formularios HTML.

---

## Instalación y Configuración

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio:

   ```bash
   git clone <URL-del-repositorio>
   cd DevJourney-Blog

   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo .env con las credenciales de acceso a la base de datos:
   ```bash
   cp .env.example .env
   ```
   ```plaintext
   PORT=3000
   JWT_SECRET=<tu_secreto_de_JWT>
   ```
4. Inicia el servidor en modo desarrollo:
   npm run dev
5. Accede al proyecto en tu navegador:

   ```plaintext
   http://localhost:3000

   ```

---

## Scripts Disponibles

npm start: Inicia el servidor en modo producción.
npm run dev: Inicia el servidor con Nodemon para desarrollo.

---

## Dependencias

### Producción

cookie-parser: Para analizar cookies.
cors: Habilita el intercambio de recursos de origen cruzado.
ejs: Renderiza vistas dinámicas.
express: Framework web backend.
jsonwebtoken: Maneja tokens JWT para autenticación.
method-override: Soporte para métodos HTTP PUT y DELETE en formularios.
morgan: Registra las solicitudes HTTP.
tinymce: Editor de texto enriquecido.

### Desarrollo

nodemon: Reinicia automáticamente el servidor en cambios durante el desarrollo.

---

## Estructura del Proyecto

```plaintext
├── src
│   ├── routes       # Rutas del servidor
│   ├── controllers  # Controladores para manejar lógica
│   ├── views        # Archivos EJS
│   ├── utils        # Funciones auxiliares (por ejemplo, JSON de posts)
│   └── public       # Archivos estáticos (CSS, JS, imágenes)
├── .env             # Variables de entorno
├── package.json     # Dependencias y scripts
├── README.md        # Documentación del proyecto
```

## Próximos Pasos

Implementar paginación para las publicaciones.
Mejorar la seguridad utilizando Helmet.js.
Desplegar el proyecto en plataformas como Render o Netlify.

## Autor

Desarrollado con ❤️ por MaicolPaucar.
