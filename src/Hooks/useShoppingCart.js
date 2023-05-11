import { useState } from "react"

export const useShoppingCart = () => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrince, setTotalPrince] = useState(0)
    
    const addProduct = (payload) => {
        const productIndex = cart.findIndex(product => product === product.id)
        if (productIndex !== -1) {
            const newCart = [...cart]
            newCart[productIndex].quantity++
            newCart[productIndex].price = payload.price + newCart[productIndex].price
            setCart(newCart)
            getTotalInfo(newCart)
        } else {
            const newCart = [...cart, {...payload, quantity: 1}]
            setCart(newCart)
            getTotalInfo(newCart)
        }       
    }
    
    const deleteProduct = (id) => {
        const newCart = cart.filter(product => product.id = id)
        setCart(newCart)
    }
    
    const showCartList = () =>{
        return cart
    }

    const getTotalQuantity = (data) => {
        const quantity = data.reduce((total, product) => total + product.quantity,0 )
        setTotalQuantity(quantity)
    }

    const getTotalPrice = (data) => {
        const price = data.reduce((total, product) => total + product.price,0 )
        setTotalPrince(price)
    }
    const getTotalInfo = (data) => {
        getTotalQuantity(data)
        getTotalPrice(data)
    }
    
    return { cart, addProduct, deleteProduct, showCartList, totalQuantity, totalPrince }
}