# Aplicación de Gestión de Publicaciones

## Descripción

Esta aplicación permite gestionar y visualizar posts, con acceso diferenciado según el tipo de usuario. Los usuarios invitados pueden explorar los posts disponibles, mientras que los administradores tienen privilegios adicionales para crear y eliminar publicaciones.

## Roles de Usuario:

### Invitado:
Los usuarios con este rol pueden:
- Ver todos los posts disponibles en la plataforma.
- Consultar los detalles de un post específico.

**Credenciales**:
- **Nombre de usuario**: `Antonette`
- **Contraseña**: `user123`

### Administrador:
Los administradores tienen un control total sobre las publicaciones y pueden:
- Ver todos los posts.
- Crear nuevos posts.
- Eliminar publicaciones existentes.

**Credenciales**:
- **Nombre de usuario**: `Bret`
- **Contraseña**: `admin123`

---

Esta estructura permite a los invitados interactuar con el contenido de manera limitada, mientras que los administradores tienen la flexibilidad para gestionar las publicaciones en su totalidad.

## Tecnologías utilizadas

- React
- TypeScript
- Material-UI
- React Router
- Axios
- @tanstack/react-query

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

### `src/`

- `components/`: Componentes reutilizables.
  - `layouts/`: Layouts de la aplicación.
- `contexts/`: Contextos de React.
  - `AuthProvider.tsx`: Contexto para el manejo de la autenticación.
  - `DrawerProvider.tsx`: Contexto para el manejo del drawer.
- `hooks/`: Hooks personalizados.
  - `usePosts.ts`: Hook para la gestión de servicios de posts.
  - `useUsers.ts`: Hook para la gestión de servicios de usuarios. 
- `pages/`: Páginas de la aplicación.
- `routes/`: Rutas de la aplicación.
- `services/`: Servicios de la aplicación.
- `styles/`: Estilos de la aplicación.
- `types/`: Tipos de datos.
- `lib/`: Funciones utilitarias y constantes.

### `public/`
- `assets/`: Recursos estáticos como imágenes, iconos, etc.
- `index.html`: Archivo HTML principal.

### `package.json`

### `package-lock.json`

## Scripts Disponibles para iniciar el proyecto

En el directorio del proyecto, puedes ejecutar:   


### Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en el directorio raíz del proyecto:

```bash
npm install
```

### Ejecución

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando en el directorio raíz del proyecto:

```bash
npm start
```

Ejecuta el servidor de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

## Dependencias

Las dependencias del proyecto se gestionan con [npm](https://www.npmjs.com/).


## Autora

- [@nadiaGincoff](https://github.com/nadiaGincoff)
