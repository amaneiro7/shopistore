import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const XCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({default: module.XCircleIcon})))

export const ProductDetail = () => {
    const { isProductDetailOpen, openProductDetail } = useContext(ShoppingCartContext)
  return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-10 transition ease-linear duration-300`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XCircleIcon 
                    className='h-6 w-6 text-black/30 cursor-pointer hover:text-black transition-colors duration-200 ease-in'
                    onClickCapture={openProductDetail(false)}
                />
            </div>
        </aside>
  )
}
