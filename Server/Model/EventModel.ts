import db from '../config/MySQL.js';
import { ResultSetHeader } from 'mysql2';
import { Alumno } from '../Schemas/Validators.js';

export const obtenerEventos = async () => {
    const [data] = await db.query('SELECT * FROM eventos');
    return data;
};

export const obtenerAlumnos = async () => {
    const [data2] = await db.query('SELECT * FROM USUARIOS_REGISTRADOS');
    return data2;
}

export const RegistroAlumno = async (userData: Alumno) =>{
const {nombres ,correo,telefono} = userData;

const [result] =  await db.query<ResultSetHeader>(
    'INSERT INTO usuarios_registrados (nombres, correo, telefono) VALUES (?,?,?)',
     [nombres,correo,telefono]
 );
return result;
}
 