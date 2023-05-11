import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ShoppingCartIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({default: module.ShoppingCartIcon})))

export const CartIcon = () => {
    const {count} = useContext(ShoppingCartContext)
  return (
    <div className='relative w-6 h-6'>
        <ShoppingCartIcon className='w-6 h-6 relative'/>
        {count >= 0 && <span className='absolute text-xs flex items-center justify-center top-[-5px] right-[-5px] bg-black/70 rounded-full w-4 h-4 text-white'>{count}</span>}
    </div>
  )
}
