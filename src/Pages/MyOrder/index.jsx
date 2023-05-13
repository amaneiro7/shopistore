import React, { Suspense, lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'
import { Link, useParams } from 'react-router-dom'

const OrderCard = lazy(() => import('@src/Components/OrderCard').then(module => ({ default: module.OrderCard })))
const ArrowLeftIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.ArrowLeftIcon })))
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))

export const MyOrder = () => {
  const { lastOrder, orders } = useContext(ShoppingCartContext)
  const params = useParams()
  const validateParamsInfo = Object.entries(params).length === 0
  let order = []
  if (validateParamsInfo) {
    order = lastOrder
  }
  if (!validateParamsInfo) {
    const findOrderIndex = orders.filter(order => order.id === Number(params.id))
    order = findOrderIndex[0].products
  }
  return (
    <>
      <Title
        title='My Order'
      >
        <Link
          className='absolute left-0'
          to='/my-orders'
        >
          <ArrowLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
      </Title>

      <div className='flex flex-col gap-3 w-80'>
        {!!order && order.map(product => (
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
