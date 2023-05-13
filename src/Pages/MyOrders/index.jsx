import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'
import { Link } from 'react-router-dom'

const OrdersCard = lazy(() => import('@src/Components/OrdersCard').then(module => ({ default: module.OrdersCard })))
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))
export const MyOrders = () => {
  const { orders } = useContext(ShoppingCartContext)
  return (
    <>
      <Title title='My Orders' />
      {
        orders.map(order => (
          <Link
            key={order.id}
            to={`/my-order/${order.id}`}
          >
            <OrdersCard {...order} />
          </Link>
        ))
      }
    </>
  )
}
