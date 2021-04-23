import { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryInterface, ItemInterface } from '../App'

export const getCategories = async () => {
  const { data } = await axios.get('http://localhost:5000/api/categories')
  return data
}

export const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoryInterface[] | null>(null)

  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])

  return { categories, setCategories }
}

export const getItems = async () => {
  const { data } = await axios.get(`http://localhost:5000/api/items`)
  return data
}

export const useGetItems = () => {
  const [items, setItems] = useState<ItemInterface[] | null>(null)

  useEffect(() => {
    getItems().then(data => setItems(data))
  }, [])

  return { items, setItems }
}
