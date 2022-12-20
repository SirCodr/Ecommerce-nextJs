import { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  function addCart(newCart){
    setCart(previousCart => [...previousCart, newCart])
  }

  useEffect(() => {
    if(cart) localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

    if(cartLocalStorage){
      setCart(cartLocalStorage)
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <CartContext.Provider value={{cart, addCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCartContext(){
  return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartContext }