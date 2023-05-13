import { useEffect, useState } from 'react'

export const useGetProducts = ({ endpoint }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [, setError] = useState(null)

  useEffect(() => {
    if (!endpoint) return
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
