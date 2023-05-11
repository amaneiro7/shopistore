import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const Card = lazy(() => import('@src/Components/Card').then(module => ({ default: module.Card })))
const ProductDetail = lazy(() => import('@src/Components/ProductDetail').then(module => ({ default: module.ProductDetail })))

export const Home = () => {
  const { products } = useContext(ShoppingCartContext)
  return (
    <>
      <div>Home</div>
      <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {products?.map(product => (
          <Card 
            key={product.id}
            {...product}
          />
        ))}
      </section>
      <ProductDetail/>
    </>
  )
}
