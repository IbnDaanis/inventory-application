import { Request, Response } from 'express'
import { pool } from '../config/database'

export const getCategories = (req: Request, res: Response) => {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) {
      return res.send(error.message)
    }
    console.log(results.rows)
    res.json(results.rows)
    pool.end()
  })
}
