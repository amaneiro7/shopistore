import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const Card = lazy(() => import('@src/Components/Card').then(module => ({ default: module.Card })))
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))
const ProductDetail = lazy(() => import('@src/Components/ProductDetail').then(module => ({ default: module.ProductDetail })))

export const Home = () => {
  const { products } = useContext(ShoppingCartContext)
  return (
    <>
      <Title title='Home' />
      <section className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_240px))] w-full max-w-screen-lg'>
        {products?.map(product => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </section>
      <ProductDetail />
    </>
  )
}
