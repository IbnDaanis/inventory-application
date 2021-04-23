import React from 'react'
import axios from 'axios'
import { ItemInterface } from '../../App'
import { getItems } from '../../utils/apiRequests'
import { CategoryItem, DeleteButton, ItemTitle } from './CategoryStyles'

interface CategoryInterface {
  item: ItemInterface
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[] | null>>
}

export const Category = ({ item, setItems }: CategoryInterface) => {
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
    <CategoryItem key={item.item_id}>
      <ItemTitle>{item.name}</ItemTitle>
      <ItemTitle>£{parseFloat(item.price.toString()).toFixed(2)}</ItemTitle>
      <DeleteButton onClick={() => deleteItem(item.item_id)}>Delete</DeleteButton>
    </CategoryItem>
  )
}
