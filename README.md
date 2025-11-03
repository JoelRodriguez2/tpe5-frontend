# TPE5 Frontend

Frontend del proyecto TPE5, conectado al backend desplegado en Render.  
Permite login con Google OAuth y muestra el token JWT del usuario.

---

## 🔧 Tecnologías

- React
- Vite
- Fetch API para consumir el backend

---

## ⚙️ Configuración

1. Instalar dependencias:

```bash
npm install

Crear archivo .env (opcional, solo para desarrollo local):

VITE_BACKEND_URL=http://localhost:5000

Iniciar en modo desarrollo:

npm run dev

Build para producción:

npm run build

Funcionalidades

Login con Google OAuth

Guarda token JWT en localStorage

Muestra token en pantalla al iniciar sesión

Puede consumir endpoints CRUD del backend usando el token
