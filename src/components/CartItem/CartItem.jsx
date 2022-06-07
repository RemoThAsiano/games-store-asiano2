import React from 'react'
import { useCartContext } from '../../store/CartContextProvider';
import './CartItem.css'

const CartItem = ({ item }) => {
    const { deleteById, removeOneUnit } = useCartContext();
    const { title, quantity, price, id , image} = item;
  return (
    <div className='card bg-secondary mb-3'>
        <h1>{title}</h1>
        {/* <div className='img-detail-container'>
        <img src={ image } alt='img' height={20}></img>
        </div> */}
        <h4>Unidades: {quantity}</h4>
        <img src={image} width={300}></img>
        <h4>Precio unitario: {price}</h4>
        <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
        <button onClick={() => deleteById(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem;

// import React from "react";

// import { useCartContext } from "../../context/CartContextProvider";

// const CartItem = ({ item }) => {
//   const { deleteById, removeOneUnit } = useCartContext();
//   const { name, quantity, price, id } = item;

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h4>Unidades: {quantity}</h4>
//       <h4>Precio unitario: ${price}</h4>
//       <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
//       <button onClick={() => deleteById(id)}>Eliminar todos</button>
//     </div>
//   );
// };

// export default CartItem;