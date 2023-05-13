import { useEffect, useState } from 'react'

export const useGetEndpoint = () => {
  const [categories, setCategories] = useState([])
  const [endpoint, setEndpoint] = useState('')
  const [paramsCategory, setParamsCategory] = useState('')
  const [, setError] = useState(null)

  const handleParamsCategory = (params) => setParamsCategory(params)

  useEffect(() => {
    setError(null)
    import('@src/services/api')
      .then(module => module.getProductsList({ endpoint: 'categories' }))
      .then(data => setCategories(data))
      .catch(error => setError(error))
  }, [])

  useEffect(() => {
    if (!categories.length) return
    getCategoryId()
  }, [categories, paramsCategory])

  const getCategoryId = () => {
    if (!Object.entries(paramsCategory).length) {
      setEndpoint('products')
    } else {
      const getCategoryId = categories.find(category => category.name.toLowerCase() === paramsCategory.category.toLowerCase())
      setEndpoint(`categories/${getCategoryId?.id}/products`)
    }
  }
  return { categories, endpoint, handleParamsCategory }
}
