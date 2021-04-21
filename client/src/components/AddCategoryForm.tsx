import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { CategoryInterface } from '../App'
import { getData } from '../utils/apiRequests'

export const AddCategoryForm = ({
  setCategories
}: {
  setCategories: React.Dispatch<React.SetStateAction<CategoryInterface[] | null>>
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addCategory = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/categories/add', { title, description })
      .then(async () => setCategories(await getData()))
    setTitle('')
    setDescription('')
  }
  return (
    <div>
      <form onSubmit={addCategory}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
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
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}
