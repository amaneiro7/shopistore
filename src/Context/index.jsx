import { createContext, useState } from 'react'
import { useGetProducts } from '../Hooks/useGetProducts'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const initialState = {
        title: "",
        price: "",
        description: "",
        images: [],
    }
    const { products, loading} = useGetProducts({})
    const [productToShow, setProductToShow] = useState(initialState)
    const [count, setCount] = useState(0)
    
    //Show Open Product Detail    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = payload => () => {
        setProductToShow(payload)
        setIsProductDetailOpen(true)
    }
    const closeOpenProductDetail = () => {
        setProductToShow(initialState)
        setIsProductDetailOpen(false)
    }

    // Add quantity
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
            closeOpenProductDetail,
            openProductDetail,
            productToShow,
            products,
            loading
        }}
    >
        {children}
    </ShoppingCartContext.Provider>
  )
}


