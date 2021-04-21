import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { ItemInterface, CategoryInterface } from '../App'
import { getItems } from '../utils/apiRequests'

interface AddItemFormProps {
  categories: CategoryInterface[] | null
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[] | null>>
}

export const AddItemForm = ({ categories, setItems }: AddItemFormProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<string | number>(0)
  const [category, setCategory] = useState('')
  const [url, setUrl] = useState('')
  const [stock, setStock] = useState<string | number>(0)

  const addCategory = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/items/add', {
        name,
        description,
        price,
        category,
        url,
        stock
      })
      .then(async res => {
        console.log(res)
        setItems(await getItems())
      })
    setName('')
    setDescription('')
    setPrice(0)
    setCategory('')
    setUrl('')
    setStock(0)
  }
  return (
    <div>
      <form onSubmit={addCategory}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={({ target }) => setPrice(target.value)}
          required
        />
        <label htmlFor="url">Url:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          required
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          required>
          <option value="">Choose Category</option>
          {categories?.map(category => (
            <option key={category.category_id} value={category.category_id}>
              {category.title}
            </option>
          ))}
        </select>
        <label htmlFor="stock">stock:</label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={({ target }) => setStock(target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}
