import { Request, Response } from 'express'
import { pool } from '../config/database'

export const getItems = (_: Request, res: Response) => {
  pool.query('SELECT * FROM item', (error, results) => {
    if (error) return res.send(error.message)
    res.json(results.rows)
  })
}

export const addItem = async (req: Request, res: Response) => {
  const { name, description, price, category, url, stock } = req.body
  const itemExists = await pool.query('SELECT * FROM ITEM WHERE name=$1', [name])
  if (itemExists.rows.length)
    return res.status(400).json('This item already exists, choose a different name.')

  pool.query(
    'INSERT INTO item(name, description, price, category, url, stock) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, description, price, category, url, stock],
    (error, results) => {
      if (error) return res.send(error.message)
      res.json(results.rows)
    }
  )
}

export const deleteItem = async (req: Request, res: Response) => {
  if (
    req.headers.authorization &&
    !req.headers.authorization.startsWith(process.env.DELETE_PASSWORD as string)
  ) {
    res.status(401).json('Invalid password')
    throw new Error('Not authorized.')
  }
  const itemExists = await pool.query('SELECT * FROM item WHERE item_id=$1', [req.params.id])
  if (!itemExists.rows.length) return res.status(400).json('This item does not exist')

  pool.query('DELETE FROM item where item_id=$1 RETURNING *', [req.params.id], (error, results) => {
    if (error) return res.send(error.message)
    res.json({ message: `The item was successfully deleted.`, item: results.rows[0] })
  })
}
