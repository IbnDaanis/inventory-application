import React from 'react'
import { CategoryInterface, ItemInterface } from '../../App'
import { Category } from '../Category/Category'
import { CategoryItem, CategoryTitle, CategoryWrapper } from './CategoryContainerStyles'

interface CategoryContainerInterface {
  categories: CategoryInterface[] | null
  items: ItemInterface[] | null
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[] | null>>
}

export const CategoryContainer = ({ categories, items, setItems }: CategoryContainerInterface) => {
  return (
    <CategoryWrapper>
      {categories?.map(category => (
        <CategoryItem key={category.category_id}>
          <CategoryTitle>{category.title}</CategoryTitle>
          {items &&
            items
              .filter(item => item.category === category.category_id)
              .map(item => <Category item={item} setItems={setItems} />)}
        </CategoryItem>
      ))}
    </CategoryWrapper>
  )
}
