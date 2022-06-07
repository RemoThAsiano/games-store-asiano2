import React, { useState } from 'react';
import './Counter.css'

function Counter ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    function handleButtonMas(){
        if(count < stock) {
            setCount(count + 1);
        }
    }

    function handleButtonMenos() {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className='count-container'>
            <div>
            <button onClick={() => handleButtonMenos()}>-</button>
            <input readOnly value={count} />
            <button onClick={() => handleButtonMas()}>+</button>
            </div>
            <button className='border border-secondary' onClick={() => (count <= stock ) && onAdd(count)}>Sumar al carrito</button>
        </div>
        
    )
}

export default Counter

//Poner el contador en CartWidget y hacer que el carrito tenga x cosas.