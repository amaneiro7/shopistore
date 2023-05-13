import { createContext } from 'react'
import { useGetProducts } from '@src/Hooks/useGetProducts'
import { useProductToShow } from '@src/Hooks/useProductToShow'
import { useShoppingCart } from '@src/Hooks/useShoppingCart'
import { useCheckout } from '@src/Hooks/useCheckout'
import { useGetFiltered } from '@src/Hooks/useGetFiltered'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Show all Products
  const {
    products,
    loading
  } = useGetProducts({})

  // Show Open Product Detail
  const {
    productToShow,
    isProductDetailOpen,
    openProductDetail,
    closeOpenProductDetail
  } = useProductToShow()

  const {
    cart,
    addProduct,
    deleteProduct,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    totalQuantity,
    totalPrice,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useShoppingCart()

  const {
    handleSearchInput,
    filteredProducts
  } = useGetFiltered({ products })

  const {
    orders,
    lastOrder,
    addToOrder
  } = useCheckout({ cart, totalQuantity, totalPrice })

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
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        totalQuantity,
        totalPrice,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,

        handleSearchInput,
        filteredProducts,

        orders,
        lastOrder,
        addToOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
