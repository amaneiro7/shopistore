import { createContext, useState } from 'react'
import { useGetProducts } from '@src/Hooks/useGetProducts'
import { useProductToShow } from '@src/Hooks/useProductToShow'
import { useShoppingCart } from '@src/Hooks/useShoppingCart'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //Show all Products
    const { products, loading} = useGetProducts({})
    
    //Show Open Product Detail    
    const { productToShow, isProductDetailOpen, openProductDetail, closeOpenProductDetail } = useProductToShow()
    
    const { cart, addProduct, deleteProduct, showCartList, totalQuantity, totalPrince } = useShoppingCart()

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true) 
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
        value={{
            products,
            loading,
                        
            productToShow,
            isProductDetailOpen,
            closeOpenProductDetail,
            openProductDetail,
            
            cart, 
            addProduct, 
            deleteProduct, 
            showCartList, 
            totalQuantity, 
            totalPrince,

            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}
    >
        {children}
    </ShoppingCartContext.Provider>
  )
}


