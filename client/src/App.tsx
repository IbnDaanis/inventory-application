import React from 'react'
import { AddCategoryForm, AddItemForm, CategoryContainer, Header } from './components'
import { useGetCategories, useGetItems } from './utils/useGetData'

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
  const { categories, setCategories } = useGetCategories()
  const { items, setItems } = useGetItems()

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
