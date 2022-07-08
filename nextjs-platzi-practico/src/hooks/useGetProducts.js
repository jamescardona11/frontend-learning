import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  async function fetchData() {
    const response = await axios(API)
    setProducts(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [API])

  return products
}

export default useGetProducts
