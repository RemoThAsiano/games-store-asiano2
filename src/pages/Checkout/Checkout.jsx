import React from 'react'
import { useState, useContext } from 'react'
import { CartContext, useCartContext } from '../../store/CartContextProvider'
import { doc, getDoc, getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import './Checkout.css';

// {buyer: { name, phone, email }, items: [{ id, title, price, amount }], date, total }
export const Checkout = () => {

    const {cartList, totalPrice, removeAll} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderID, setOrderID] = useState()

    
    const [ buyer, setBuyer ] = useState({
        Name:'',
        Phone:'',
        Email:''
        
    })

    const {Name, Phone, Email} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    
    }

    const db = getFirestore();
    const generateOrder = async(data) => {
        setLoading(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data)
            
            setOrderID(order.id)
            removeAll([])
            console.log(col, data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const items = cartList.map(e => {return {id:e.id,name:e.title,price:e.price,quantity:e.quantity }})
        const total = totalPrice()
        const data = {buyer, items, date, total}
        generateOrder(data)
        

    }

  return (
    <><div className='center'>
        <h1>Finalizando Compra</h1>
        
        { loading ? <Spinner/> : (!orderID &&<div>
        <h4>Completar Datos:</h4>
        <div className='column'>
        <form onSubmit={handleSubmit}>
            <div className='padding-top'>
            <input type="text" name="Name" placeholder="Name" value={Name} onChange={handleInputChange} required></input>
            </div>
            <div className='padding-top'>
            <input type="number" name="Phone" placeholder="Phone" value={Phone} onChange={handleInputChange} required></input>
            </div>
            <div className='padding-top'>
            <input type="email" name="Email" placeholder="Email" value={Email} onChange={handleInputChange} required></input>
            </div>
            <div className='padding-top'>
            <input type="submit" value="Finalizar Compra"></input>
            </div>
        </form>
        </div>
        </div>)
        }<div>
        {
            orderID&&(
                <div className='checkout-form-input'>
                <div className='center card bg-secondary mb-3'>
                    <h4>Compra Finalizada con Exito</h4>
                    <h4>{`Su código de compra es: ${orderID}`}</h4>
                    <Link to="/"><h5>Volver a GameStore</h5></Link>
                    </div>
                </div> )
        }
        </div>
        </div>
        
    </>
    
  )
}
