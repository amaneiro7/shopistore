import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'
import { useNearScreen } from '@src/Hooks/useNearScreen'
import './Card.css'
import { useNavigate } from 'react-router-dom'

const PlusCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.PlusCircleIcon })))

export const Card = (item) => {
  const { title, price, images, category } = item
  const { openProductDetail, addProduct, closeCheckoutSideMenu, openCheckoutSideMenu, closeOpenProductDetail } = useContext(ShoppingCartContext)
  const [show, element] = useNearScreen()
  const navigate = useNavigate()

  const handleShowProduct = () => {
    openProductDetail(item)
    closeCheckoutSideMenu()
  }

  const handleAddProductToCart = (event) => {
    event.stopPropagation()
    addProduct(item)
    closeOpenProductDetail()
    openCheckoutSideMenu()
  }
  const handleCategoryRedirect = (event) => {
    event.stopPropagation()
    closeOpenProductDetail()
    navigate(`/${category.name}`)
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={handleShowProduct}
      ref={element}
    >
      {show &&
        <figure className='relative mb-2 w-full h-4/5'>
          <span
            className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 z-10'
            onClick={handleCategoryRedirect}
          >
            {category.name}
          </span>
          <img
            className='bg-slate-400/90 w-full h-full object-cover rounded-lg duration-1000 ease-linear fadein'
            src={images[0]}
            alt={title}
            loading='lazy'
          />
          <PlusCircleIcon
            className='absolute top-0 right-0 w-6 h-6 m-2 bg-white/40 rounded-full'
            onClick={handleAddProductToCart}
          />
        </figure>}
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}
