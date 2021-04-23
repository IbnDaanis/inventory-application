import React, { useEffect, useState } from 'react'
import { AddCategoryForm, AddItemForm, CategoryContainer, Header } from './components'
import { getData, getItems } from './utils/apiRequests'

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

  return (
    <>
      <Header />
      {categories && categories.length && items && items.length && (
        <>
          <CategoryContainer categories={categories} items={items} setItems={setItems} />
          <AddItemForm categories={categories} setItems={setItems} />
          <AddCategoryForm setCategories={setCategories} />
        </>
      )}
    </>
  )
}
