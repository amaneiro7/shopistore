import React, { Suspense, lazy, useContext } from 'react'
import {ShoppingCartContext} from '@src/Context'

const OrderCard = lazy(() => import('@src/Components/OrderCard').then(module => ({ default: module.OrderCard })))

export const MyOrder = () => {
  const { lastOrder } = useContext(ShoppingCartContext)
  console.log(lastOrder)
  return (
    <>
    <div>MyOrder</div>
    <div className='flex flex-col gap-3 w-80'>
        {lastOrder.map(product => (
          <Suspense key={product.id}>
            <OrderCard
              {...product}
              />
          </Suspense>
        ))}
      </div>
    </>
  )
}
