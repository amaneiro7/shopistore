import { createContext } from 'react'
import { useGetProducts } from '@src/Hooks/useGetProducts'
import { useProductToShow } from '@src/Hooks/useProductToShow'
import { useShoppingCart } from '@src/Hooks/useShoppingCart'
import { useCheckout } from '@src/Hooks/useCheckout'
import { useGetFiltered } from '@src/Hooks/useGetFiltered'
import { useGetEndpoint } from '../Hooks/useGetEndpoint'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Get all Categories
  const {
    categories,
    endpoint,
    handleParamsCategory
  } = useGetEndpoint()

  // Show all Products
  const {
    products,
    loading
  } = useGetProducts({ endpoint })

  // Show Open Product Detail
  const {
    productToShow,
    isProductDetailOpen,
    openProductDetail,
    closeOpenProductDetail
  } = useProductToShow()

  //
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
    searchByTitle,
    clenInput,
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
        categories,
        handleParamsCategory,

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

        searchByTitle,
        handleSearchInput,
        clenInput,
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
