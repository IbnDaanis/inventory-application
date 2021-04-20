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

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.body
  const categoryExists = await pool.query('SELECT * FROM category WHERE category_id=$1', [id])
  if (!categoryExists.rows.length) return res.status(400).json('This category does not exist')

  pool.query('DELETE FROM item where category=$1', [id])
  pool.query('DELETE FROM category where category_id=$1 RETURNING *', [id], (error, results) => {
    if (error) return res.send(error.message)
    res.json({ message: `The category was successfully deleted.`, category: results.rows[0] })
  })
}
