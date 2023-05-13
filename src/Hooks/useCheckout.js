import { useState } from 'react'

export const useCheckout = ({ cart, totalQuantity, totalPrice }) => {
  const [orders, setOrders] = useState([])
  const [lastOrder, setlastOrder] = useState([])
  const addToOrder = () => {
    const currentDate = new Date()
    const formateDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
    const newOrderToAdd = {
      id: orders.length + 1,
      date: formateDate,
      products: cart,
      totalProducts: totalQuantity,
      totalPrice
    }
    setlastOrder(cart)
    setOrders([...orders, newOrderToAdd])
  }
  return { orders, lastOrder, addToOrder }
}
