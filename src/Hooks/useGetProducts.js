import { useEffect, useState } from 'react'

export const useGetProducts = ({ endpoint = 'products' }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    import('@src/services/api')
      .then(module => module.getProductsList({ endpoint }))
      .then(data => setProducts(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [endpoint])
  return { products, loading }
}
