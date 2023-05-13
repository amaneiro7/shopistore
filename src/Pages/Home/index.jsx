import React, { lazy, useContext, useEffect } from 'react'
import { ShoppingCartContext } from '@src/Context'
import { useParams } from 'react-router-dom'
import { LoadingCard } from '@src/Components/LoadingCard'

const Card = lazy(() => import('@src/Components/Card').then(module => ({ default: module.Card })))
const Title = lazy(() => import('@src/Components/Title').then(module => ({ default: module.Title })))
const ProductDetail = lazy(() => import('@src/Components/ProductDetail').then(module => ({ default: module.ProductDetail })))

export const Home = () => {
  const params = useParams()
  const { searchByTitle, handleSearchInput, filteredProducts, handleParamsCategory, clenInput, loading } = useContext(ShoppingCartContext)

  useEffect(() => {
    handleParamsCategory(params)

    return () => {
      clenInput()
    }
  }, [params])

  return (
    <>
      <Title title='Home' />
      <input
        type='text'
        className='w-80 border border-black rounded-lg p-4 mb-4 focus:outline-none'
        placeholder='Search a product'
        value={searchByTitle}
        onChange={handleSearchInput}
      />
      <section className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_240px))] w-full max-w-screen-lg'>
        {loading && <LoadingCard />}
        {(!loading && !Array.isArray(filteredProducts)) && <p>No se encontraron productos en esta categoria</p>}
        {(!loading && (Array.isArray(filteredProducts)) && !filteredProducts?.length) && <p>We don't found any coincidence</p>}
        {(!loading && Array.isArray(filteredProducts)) && filteredProducts?.map(product => (
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
