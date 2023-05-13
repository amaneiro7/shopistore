import React, { Suspense, lazy, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '@src/Context'
import './style.css'

const XCircleIcon = lazy(() => import('@heroicons/react/24/outline').then(module => ({ default: module.XCircleIcon })))
const OrderCard = lazy(() => import('@src/Components/OrderCard').then(module => ({ default: module.OrderCard })))

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cart, totalPrice, totalQuantity, cleanCart, addToOrder, deleteProduct } = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  const handleCheckout = () => {
    closeCheckoutSideMenu()
    addToOrder()
    cleanCart()
    navigate('/my-order/last')
  }
  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-20 transition ease-linear duration-300`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <XCircleIcon
          className='h-6 w-6 text-black/30 cursor-pointer hover:text-black transition-colors duration-200 ease-in'
          onClickCapture={closeCheckoutSideMenu}
        />
      </div>
      <div className='flex flex-col flex-1 gap-3 px-6 mb-6 overflow-y-auto'>
        {cart.map(product => (
          <Suspense key={product.id}>
            <OrderCard
              {...product}
              onClick={deleteProduct}
            />
          </Suspense>
        ))}
      </div>
      <div className='flex flex-col gap-3 px-6'>
        <div>
          <p className='flex items-center justify-between'>
            <span className='text-base font-light'>Cantidad: </span>
            <span className='text-lg font-medium'>{totalQuantity}</span>
          </p>
          <p className='flex items-center justify-between'>
            <span className='text-base font-light'>Total: </span>
            <span className='text-lg font-medium'>${totalPrice}</span>
          </p>
        </div>
        <button
          className='w-full bg-black text-white py-3 mb-6 rounded-lg cursor-pointer hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/20'
          onClick={handleCheckout}
          disabled={totalQuantity === 0}
        >
          Checkout
        </button>
      </div>
    </aside>
  )
}
