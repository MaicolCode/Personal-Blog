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
