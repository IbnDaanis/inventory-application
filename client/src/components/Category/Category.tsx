import React from 'react'
import axios from 'axios'
import { ItemInterface } from '../../App'
import { getItems } from '../../utils/apiRequests'

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
    <div key={item.item_id}>
      <span>{item.name}</span>
      <button onClick={() => deleteItem(item.item_id)}>Delete</button>
    </div>
  )
}
