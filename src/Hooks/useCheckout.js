import { useState } from 'react'

export const useCheckout = ({cart, totalQuantity, totalPrice}) => {
    const [order, setOrder] = useState([])
    const [lastOrder, setlastOrder] = useState([])
    const addToOrder = () => {
        const currentDate = new Date()
        const formateDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
        const newOrderToAdd = {
            date: formateDate,
            products: cart,
            totalProducts: totalQuantity,
            totalPrice: totalPrice,
        }
        console.log(newOrderToAdd);
        setlastOrder(cart)
        setOrder([...order, newOrderToAdd])
    }    
  return { order, lastOrder, addToOrder }
}
