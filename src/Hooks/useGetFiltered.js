import { useLayoutEffect, useState } from 'react'

export const useGetFiltered = ({ products }) => {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSearchInput = ({ target: { value } }) => setSearchByTitle(value)
  const clenInput = () => setSearchByTitle('')
  useLayoutEffect(() => {
    if (!searchByTitle) {
      setFilteredProducts(products)
    } else {
      import('@src/utils/filteringItems.js')
        .then(module => setFilteredProducts(module.filteringItems({ itemsList: products, params: 'title', inputToSearch: searchByTitle })))
    }
  }, [searchByTitle, products])

  return { searchByTitle, handleSearchInput, filteredProducts, clenInput }
}
