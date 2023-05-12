import React, { lazy } from 'react'

const XCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.XCircleIcon })))

export const OrderCard = props => {
  const { id, title, images, price, quantity, deleteProduct } = props  

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center justify-center gap-2'>
        <figure className='w-16 h-16'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className='w-auto flex flex-col text-sm font-light'>
          <span className='whitespace-pre-wrap'>{title}</span>
          <span className='capitalize'>Cantidad: {quantity}</span>
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-base font-medium'>${price}</p>
        {deleteProduct && 
        <XCircleIcon
          className='h-6 w-6 text-black/30 cursor-pointer hover:text-black transition-colors duration-200 ease-in'
          onClick={() => deleteProduct(id)}
        />}
      </div>
    </div>
  )
}
