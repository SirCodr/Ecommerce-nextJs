import React, { useContext } from 'react'
import { useCartContext } from '@context/CartContext'

function Header() {
  const {cart} = useCartContext()

  return (
    <>
      Header
      <span>{cart.length}</span>
    </>
  )
}

export default Header