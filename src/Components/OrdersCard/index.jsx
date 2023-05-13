import React, { lazy } from 'react'

const ChevronRightIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.ChevronRightIcon })))

export const OrdersCard = ({ id, date, totalPrice, totalProducts }) => {
  return (
    <div className='flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg'>
      <div className='w-full flex flex-row items-center justify-between gap-3'>
        <p className='flex flex-col'>
          <span className='font-light'>Purchase: {id}</span>
          <span className='font-light'>Date: {date}</span>
          <span className='font-light'>Articles: {totalProducts}</span>
        </p>
        <p className='flex items-center gap-3'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
}
