import React from 'react'
import { CategoryInterface, ItemInterface } from '../../App'
import { Category } from '../Category/Category'

interface CategoryContainerInterface {
  categories: CategoryInterface[] | null
  items: ItemInterface[] | null
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[] | null>>
}

export const CategoryContainer = ({ categories, items, setItems }: CategoryContainerInterface) => {
  return (
    <div>
      {categories?.map(category => (
        <div key={category.category_id}>
          <h2>{category.title}</h2>
          {items &&
            items
              .filter(item => item.category === category.category_id)
              .map(item => <Category item={item} setItems={setItems} />)}
        </div>
      ))}
    </div>
  )
}
