import { Pool } from 'pg'

export const pool = new Pool({
  user: 'ikraam',
  password: '',
  database: 'inventory',
  host: 'localhost',
  port: 5432
})
