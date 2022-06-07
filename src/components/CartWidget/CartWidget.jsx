import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../store/CartContextProvider'
import IconCart from '../img/IconCart.png'
import './CartWidget.css'

export const CartWidget = () => {
  const { totalCount } = useCartContext();
  return (
    <NavLink to="/cart">
    <div className='padding'>
    <span className='cartWidget'>{totalCount()}</span>
    <img src={IconCart} alt='img carrito' width={50}/>
    </div>
    </NavLink>
  )
}

export default CartWidget;

//NavLink to cart
