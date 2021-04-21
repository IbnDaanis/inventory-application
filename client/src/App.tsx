import React, { useEffect, useState } from 'react'
import { AddCategoryForm } from './components/AddCategoryForm'
import { getData, getItems } from './utils/apiRequests'

export interface CategoryInterface {
  category_id: string
  title: string
  description: string
}

interface ItemInterface {
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

  return (
    <div className="App">
      <div className="categories">
        {categories?.map(category => (
          <div key={category.category_id}>
            <h2>{category.title}</h2>
            {items &&
              items
                .filter(item => item.category === category.category_id)
                .map(item => <p key={item.item_id}>{item.name}</p>)}
          </div>
        ))}
      </div>
      <AddCategoryForm setCategories={setCategories} />
    </div>
  )
}
