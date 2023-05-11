import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const PlusCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({default: module.PlusCircleIcon})))

export const Card = ({title, price, description, images, category}) => {
    const {addCounter, openProductDetail} = useContext(ShoppingCartContext)    
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10'>{category.name}</span>
            <img 
                className='w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out duration-300'
                src={images[0]}
                alt={title}
                onClick={openProductDetail(true)}
            />
            <PlusCircleIcon 
                className='absolute top-0 right-0 w-6 h-6 m-2 bg-white/40 rounded-full'
                onClick={addCounter}
            />        
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{title}</span>
            <span className='text-lg font-medium'>${price}</span>
        </p>
    </div>
  )
}
