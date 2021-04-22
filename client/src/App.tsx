import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AddCategoryForm, AddItemForm } from './components'
import { getData, getItems } from './utils/apiRequests'
import { Header } from './components/Header/Header'

export interface CategoryInterface {
  category_id: string
  title: string
  description: string
}

export interface ItemInterface {
  item_id: string
  name: string
  description: string
  price: number
  category: string
  url: string
  stock: number
}

export const App = () => {
  const [categories, setCategories] = useState<CategoryInterface[] | null>(null)
  const [items, setItems] = useState<ItemInterface[] | null>(null)

  useEffect(() => {
    ;(async () => setCategories(await getData()))()
  }, [])

  useEffect(() => {
    ;(async () => setItems(await getItems()))()
  }, [])

  useEffect(() => {
    console.log('Items: ', items)
  }, [items])

  const deleteItem = (id: string) => {
    const prompt = window.prompt('Please enter the Admin Password', 'Enter the password here')
    const config = {
      headers: {
        Authorization: prompt
      }
    }
    axios
      .delete(`http://localhost:5000/api/items/remove/${id}`, config)
      .then(async () => setItems(await getItems()))
      .catch(err => console.log(err.response.data))
  }

  return (
    <>
      <Header />
      <div>
        <div>
          {categories?.map(category => (
            <div key={category.category_id}>
              <h2>{category.title}</h2>
              {items &&
                items
                  .filter(item => item.category === category.category_id)
                  .map(item => (
                    <div key={item.item_id}>
                      <span>{item.name}</span>
                      <button onClick={() => deleteItem(item.item_id)}>Delete</button>
                    </div>
                  ))}
            </div>
          ))}
        </div>
        <AddItemForm categories={categories} setItems={setItems} />
        <AddCategoryForm setCategories={setCategories} />
      </div>
    </>
  )
}
