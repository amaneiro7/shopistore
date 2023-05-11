import React, { lazy } from 'react'
const Navbar = lazy(() => import('@src/Components/Navbar').then(module => ({ default: module.Navbar })))
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center'>
        {children}
      </main>
    </>
  )
}
