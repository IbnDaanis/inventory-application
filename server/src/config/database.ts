import { Pool } from 'pg'

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'inventory',
  host: 'localhost',
  port: 5432
})
