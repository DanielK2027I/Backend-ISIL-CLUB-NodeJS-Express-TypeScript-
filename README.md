# Backend de Registro de Usuarios - ISIL CLUB DEVELOPERS

Este es un servidor robusto desarrollado con **Node.js** y **TypeScript** para la gestión de registros de alumnos. Implementa validaciones estrictas y una arquitectura limpia.

## Tecnologías utilizadas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

## 📂 Estructura del Proyecto
```text
├── Server
│   ├── config
│   │   ├── .env            # Variables de entorno (Privado)
│   │   └── MySQL.ts        # Conexión a la base de datos
│   ├── Controllers
│   │   └── app.ts          # Lógica de las rutas y respuestas
│   ├── Model
│   │   └── EventModel.ts   # Consultas SQL (Funciones de DB)
│   └── Schemas
│       └── Validators.ts   # Validaciones de datos con Zod
├── node_modules/           # Librerías instaladas
├── .env.example            # Ejemplo de variables de entorno
├── package.json            # Scripts y dependencias
└── tsconfig.json           # Configuración de TypeScript
```

## Características principales

1.  **Validación de Datos**: Gracias a Zod, el servidor valida que los correos sean reales, los teléfonos sean strings y los nombres tengan una longitud mínima antes de tocar la base de datos.
2.  **Seguridad**: Uso de variables de entorno (`.env`) para proteger las credenciales de la DB.
3.  **Arquitectura escalable**: Separación de rutas, controladores y modelos.

##  Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/DanielK2027I/Backend-ISIL-CLUB-NodeJS-Express-TypeScript-.git](https://github.com/DanielK2027I/Backend-ISIL-CLUB-NodeJS-Express-TypeScript-.git)
2. Instalar las dependencias:
   ```bash
   npm install
3. Configurar Variables de Entorno:
    
    ```bash
    #COPIA EL CONTENIDO DE ".env.example" Y COMPLETA TUS DATOS REALES
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_contraseña_de_mysql
    DB_NAME=nombre_de_tu_base_de_datos
4. Prepara tu Base de Datos (Eventos y Usuarios_Registrados):
   

   <img width="393" height="249" alt="image" src="https://github.com/user-attachments/assets/11aa6dea-d6ba-4e3f-bebc-81e1f3b2f46b" />
   <img width="415" height="169" alt="image" src="https://github.com/user-attachments/assets/06ebd215-6f75-4ba5-a227-c1eba5767ccd" />
5. Ejecuta el servidor:
   ```bash
   npm run dev
   #SI TODO ES CORRECTO EN TERMINAL APARECE: Servidor corriendo en http://localhost:3000

## Cómo probar los Endpoints (Postman)

A. Registrar un Usuario (POST)
URL: http://localhost:3000/registro

Método: POST

Body (JSON):  
   ```json
      {
       "nombres": "Name_Lastname",
       "correo": "correo@ejemplo.com",
       "telefono": "000000000"
      }
   ```

## Prueba en POSTMAN

A. Registrar un Usuario (POST)
URL: http://localhost:3000/registro

Método: POST

<img width="1244" height="628" alt="Captura de pantalla 2026-01-15 154115" src="https://github.com/user-attachments/assets/24875ec6-069f-4cdb-8327-a43e655d7585" />


B. Listar Eventos (GET)

URL: http://localhost:3000/eventos

Método: GET

<img width="1379" height="685" alt="Captura de pantalla 2026-01-15 153939" src="https://github.com/user-attachments/assets/9e837f6b-fa16-474e-91b3-332b07286d63" />


C. Listar Alumnos (GET)

URL: http://localhost:3000/alumnos

Método: GET

<img width="1156" height="820" alt="Captura de pantalla 2026-01-15 154140" src="https://github.com/user-attachments/assets/63e7119e-3edd-41c4-ba2a-87c7cb8896a3" />


## Validaciones con Zod

Verificamos que al colocar una mala sintaxis del body, zod impide seguir con el método POST

  
<img width="1043" height="629" alt="image" src="https://github.com/user-attachments/assets/80ff58f1-c4fa-467d-ac2a-139c9330c38c" />

## VERIFICACION DE DATOS EN MySQL

Todos los datos ingresados son visibles en la tabla usuarios_registrados

<img width="910" height="371" alt="Captura de pantalla 2026-01-15 154723" src="https://github.com/user-attachments/assets/75a2dcd6-2bf6-42ca-8077-572675a53a5c" />

---
### 👨‍💻 Desarrollado por: **Juan Daniel Yllanes Caldas ** 


*Estudiante de Ingeniería de Sistemas - USIL* -

*Egresado de Diseño y Desarrollo de Videojuegos - ISIL* 


[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juandaniel-yllanes-caldas-b5634b315/)






   
