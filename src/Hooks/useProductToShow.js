import { useState } from "react"

const initialState = {
    title: "",
    price: "",
    description: "",
    images: [],
}
export const useProductToShow = () => {
    const [productToShow, setProductToShow] = useState(initialState)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = payload => () => {
        setProductToShow(payload)
        setIsProductDetailOpen(true)
    }
    const closeOpenProductDetail = () => {
        setProductToShow(initialState)
        setIsProductDetailOpen(false)
    }
  return {
    productToShow,
    isProductDetailOpen,
    openProductDetail,
    closeOpenProductDetail
  }
}
