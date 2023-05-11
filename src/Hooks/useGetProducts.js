import React, { useCallback } from 'react'
import { getProductsList } from '../services/api'

export const useGetProducts = ({endpoint}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previousEndpoint = useRef(endpoint)

    const getProducts = useCallback(async ({endpoint}) => {
        if (endpoint === previousEndpoint.current) return

        try {
            setLoading(true)
            setError(null)
            previousEndpoint.current = endpoint
            const newPorducts = await getProductsList({endpoint})
            setProducts(newPorducts)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])
  return { products, loading, getProducts }
}
