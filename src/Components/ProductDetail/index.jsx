import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const XCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.XCircleIcon })))

export const ProductDetail = () => {
  const { isProductDetailOpen, closeOpenProductDetail, productToShow, addProduct } = useContext(ShoppingCartContext)
  const { title, price, description, images } = productToShow
  const handleAddProductToCart = () => {
    addProduct(productToShow)
  }
  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-fit z-10 transition ease-linear duration-300`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XCircleIcon
          className='h-6 w-6 text-black/30 cursor-pointer hover:text-black transition-colors duration-200 ease-in'
          onClickCapture={closeOpenProductDetail}
        />
      </div>
      <figure className='px-6'>
        <img
          className='h-full w-full rounded-lg object-contain'
          src={images[0]}
          alt={title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span>${price}</span>
        <span>{title}</span>
        <span>{description}</span>
      </p>
      <div className='px-6'>
        <button
          className='w-full bg-black text-white py-3 mb-6 rounded-lg cursor-pointer hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/20'
          onClick={handleAddProductToCart}
        >
          Add to Cart
        </button>
      </div>
    </aside>
  )
}
