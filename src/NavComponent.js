import React from 'react'
import { useSelector } from 'react-redux';

const NavComponent = () => {

  const cartItem = useSelector((store)=>store.cart.items)
  

  return (
    <div className="navbar">
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
    <a className="cart-link" href="#" onClick={()=>console.log("Hello")}>Cart - {cartItem.length}</a>
</div>
  )
}

export default NavComponent