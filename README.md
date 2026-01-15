# Backend de Registro de Usuarios - ISIL

Este es un servidor robusto desarrollado con **Node.js** y **TypeScript** para la gestión de registros de alumnos. Implementa validaciones estrictas y una arquitectura limpia.

## Tecnologías utilizadas

* **Node.js & Express**: Framework base para el servidor.
* **TypeScript**: Para un desarrollo con tipado fuerte y menos errores.
* **Zod**: Validación de esquemas de datos (Data Integrity).
* **MySQL**: Base de datos relacional.
* **tsx**: Ejecución de TypeScript en tiempo real con modo watch.

## Características principales

1.  **Validación de Datos**: Gracias a Zod, el servidor valida que los correos sean reales, los teléfonos sean strings y los nombres tengan una longitud mínima antes de tocar la base de datos.
2.  **Seguridad**: Uso de variables de entorno (`.env`) para proteger las credenciales de la DB.
3.  **Arquitectura escalable**: Separación de rutas, controladores y modelos.

##  Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/DanielK2027I/Backend-ISIL-CLUB-NodeJS-Express-TypeScript-.git](https://github.com/DanielK2027I/Backend-ISIL-CLUB-NodeJS-Express-TypeScript-.git)
2. Instalar las dependencias

   
