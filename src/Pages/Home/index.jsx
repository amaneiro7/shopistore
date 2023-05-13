import React, { lazy, useContext } from 'react'
import { ShoppingCartContext } from '@src/Context'

const Card = lazy(() => import('@src/Components/Card').then(module => ({ default: module.Card })))
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))
const ProductDetail = lazy(() => import('@src/Components/ProductDetail').then(module => ({ default: module.ProductDetail })))

export const Home = () => {
  const { handleSearchInput, filteredProducts } = useContext(ShoppingCartContext)
  return (
    <>
      <Title title='Home' />
      <input
        type='text'
        className='w-80 border border-black rounded-lg p-4 mb-4 focus:outline-none'
        placeholder='Search a product'
        onChange={handleSearchInput}
      />
      <section className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_240px))] w-full max-w-screen-lg'>
        {filteredProducts?.map(product => (
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
