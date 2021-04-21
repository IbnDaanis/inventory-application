import axios from 'axios'

export const getData = async () => {
  const { data } = await axios.get('http://localhost:5000/api/categories')
  return data
}

export const getItems = async () => {
  const { data } = await axios.get(`http://localhost:5000/api/items`)
  return data
}
