import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface CategoryInterface {
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

// interface ItemsInterface {
//   [key: string]: ItemInterface[]
// }

export const App = () => {
  const [categories, setCategories] = useState<CategoryInterface[] | null>(null)
  const [items, setItems] = useState<ItemInterface[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5000/api/categories')
      setCategories(data)
    }
    getData()
  }, [])

  useEffect(() => {
    if (!categories) return

    const getItems = async (id: string) => {
      const { data } = await axios.get(`http://localhost:5000/api/items/category/${id}`)
      return data
    }

    const itemsToAdd: ItemInterface[] = []
    categories.forEach(async category => {
      const categoryItems = await getItems(category.category_id)
      itemsToAdd.push(...categoryItems)
    })

    setItems(itemsToAdd)
  }, [categories])

  useEffect(() => {
    console.log('Items: ', items)
  }, [items])

  return (
    <div className="App">
      <div className="categories">
        {categories?.map(category => (
          <div key={category.category_id}>
            <h2>{category.title}</h2>
            {items && items.map(item => <p key={item.item_id}>{item.name}</p>)}
          </div>
        ))}
      </div>
    </div>
  )
}
