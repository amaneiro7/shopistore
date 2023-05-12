import React, { lazy } from 'react'

const Navbar = lazy(() => import('@src/Components/Navbar').then(module => ({ default: module.Navbar })))
const CheckoutSideMenu = lazy(() => import('@src/Components/CheckoutSideMenu').then(module => ({ default: module.CheckoutSideMenu })))

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CheckoutSideMenu />
      <main className='flex flex-col items-center'>
        {children}
      </main>
    </>
  )
}
