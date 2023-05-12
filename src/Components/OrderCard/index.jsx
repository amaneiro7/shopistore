import React, { lazy } from 'react'

const XCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.XCircleIcon })))

export const OrderCard = props => {
  const { title, images, price, quantity } = props
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className='flex flex-col text-sm font-light'>
          <span className='truncate hover:text-clip'>{title}</span>
          <span>cantidad: {quantity}</span>
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XCircleIcon
          className='h-6 w-6 text-black/30 cursor-pointer hover:text-black transition-colors duration-200 ease-in'
        />
      </div>
    </div>
  )
}
