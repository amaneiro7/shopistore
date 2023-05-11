import { createContext, useState } from 'react'
import { useGetProducts } from '../Hooks/useGetProducts'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const { products, loading} = useGetProducts({})
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = payload => () => {
        setIsProductDetailOpen(payload)
    }

    const addCounter = () => {
        setCount(count + 1)
    }
    const ShoppingCart = () => {
        const cart = []
        return {
            addProduct({id}) {

            }
        }
    }
  return (
    <ShoppingCartContext.Provider
        value={{
            count,
            addCounter,
            isProductDetailOpen,
            openProductDetail,
            products,
            loading
        }}
    >
        {children}
    </ShoppingCartContext.Provider>
  )
}


