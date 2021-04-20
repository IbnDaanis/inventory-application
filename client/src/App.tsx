import React, { useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5000/api/items')
      console.log(data)
    }
    getData()
  }, [])

  return <div className="App">Hello</div>
}
