import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(dirname, '.env') });

const db  = mysql.createPool({
    host:  process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
export default db;