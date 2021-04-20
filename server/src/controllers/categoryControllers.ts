import { Request, Response } from 'express'
import { pool } from '../config/database'

export const getCategories = (_: Request, res: Response) => {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) return res.send(error.message)
    res.json(results.rows)
  })
}

export const addCategory = async (req: Request, res: Response) => {
  const { title, description } = req.body
  const categoryExists = await pool.query('SELECT * FROM category WHERE title=$1', [title])
  if (categoryExists.rows.length)
    return res.status(400).json('This category already exists, choose a different title.')

  pool.query(
    'INSERT INTO category (title, description) VALUES($1, $2) RETURNING *',
    [title, description],
    (error, results) => {
      if (error) return res.send(error.message)
      res.json(results.rows)
    }
  )
}
