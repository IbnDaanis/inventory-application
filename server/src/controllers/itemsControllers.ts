import { Request, Response } from 'express'
import { pool } from '../config/database'

export const getItems = (req: Request, res: Response) => {
  pool.query('SELECT * FROM item', (error, results) => {
    if (error) return res.send(error.message)
    res.json(results.rows)
  })
}

export const addItem = async (req: Request, res: Response) => {
  const { name, description, price, category, url, stock } = req.body
  const item = await pool.query('SELECT * FROM ITEM WHERE name=$1', [name])
  if (item) return res.status(400).json('This item already exists, choose a different name')

  pool.query(
    'INSERT INTO item(name, description, price, category, url, stock) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, description, price, category, url, stock],
    (error, results) => {
      if (error) return res.send(error.message)
      res.json(results.rows)
    }
  )
}
