import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface CategoryInterface {
  category_id: string
  title: string
  description: string
}

export const App = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5000/api/categories')
      console.log(data)
      setCategories(data)
    }
    getData()
  }, [])

  return (
    <div className="App">
      Hello
      <div className="categories">
        {categories?.map((category) => (
          <h2 key={category.category_id}>{category?.title}</h2>
        ))}
      </div>
    </div>
  )
}
