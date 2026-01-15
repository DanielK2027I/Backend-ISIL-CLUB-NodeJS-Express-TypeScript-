import {z} from 'zod';

export const ValidatorsSchema = z.object({
   nombres : z.string(),
   correo : z.string().email(),
   telefono: z.string().length(9)
});

export type Alumno = z.infer<typeof ValidatorsSchema>;