import React, { lazy, useEffect, useState } from 'react'

const Card = lazy(() => import('@src/Components/Card').then(module => ({ default: module.Card })))

export const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    import('@src/services/api')
      .then(module => module.getProductsList({endpoint: 'products'}))
      .then(data => setProducts(data))
  }, [])
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
        
    </>
  )
}
