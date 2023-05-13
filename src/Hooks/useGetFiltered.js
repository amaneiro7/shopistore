import { useLayoutEffect, useState } from 'react'

export const useGetFiltered = ({ products }) => {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSearchInput = ({ target: { value } }) => setSearchByTitle(value)

  const filteredItemsByTitle = (itemsList, inputToSearch) =>
    itemsList.filter(item =>
      item.title.toLowerCase().includes(inputToSearch.toLowerCase()))

  useLayoutEffect(() => {
    if (!searchByTitle) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(filteredItemsByTitle(products, searchByTitle))
    }
  }, [searchByTitle, products])

  return { handleSearchInput, filteredProducts }
}
