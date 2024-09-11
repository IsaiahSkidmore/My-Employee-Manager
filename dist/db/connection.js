import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
    host: "localhost",
    user: "isaiahskidmore",
    database: "employees_db",
    port: 5432,
});
export { pool };
