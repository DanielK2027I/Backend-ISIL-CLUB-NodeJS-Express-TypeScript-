import express from 'express';
import cors from 'cors';
import { obtenerEventos } from '../Model/EventModel.js';
import { RegistroAlumno } from '../Model/EventModel.js';
import { Request, Response } from 'express';
import { ValidatorsSchema } from '../Schemas/Validators.js';
import { ResultSetHeader } from 'mysql2';
import { obtenerAlumnos } from '../Model/EventModel.js';
const app = express();
app.use(cors());
app.use (express.json());   


app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>Bienvenido a la API de ISIL Club 🚀</h1>
        <p>El servidor está funcionando correctamente.</p>
        <p>Para ver los datos, ve a: <a href="/eventos">/eventos</a></p>
    `);
});

app.get('/eventos', async (req: Request, res: Response) => {
    try {
        const eventos = await obtenerEventos();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
});

app.get('/alumnos', async (req: Request, res: Response) => {
    try {
        const alumnos = await obtenerAlumnos();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alumnos' });
    }
});


app.post('/registro', async (req: Request, res: Response) => {
   try {
    const ValidatedData = ValidatorsSchema.parse(req.body);
    const resultado = await RegistroAlumno (ValidatedData) as ResultSetHeader;
    res.status(201).json({ message: 'Alumno registrado exitosamente', id: resultado.insertId });
   } catch (error: any) {
    if (error.errors) {
        return res.status(400).json({ error: 'Datos de entrada inválidos', details: error.errors });
    }
    res.status (500).json({ error: 'Error al registrar el alumno' });
   }
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});