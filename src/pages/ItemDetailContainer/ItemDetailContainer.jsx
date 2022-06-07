import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
// import CartContextProvider from "../../store/CartContextProvider";
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Spinner from "../../components/Spinner/Spinner";

function getItem(id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
        
    // const myPromise = new Promise((resolve, reject) => {
    //     const data = [
    //         {
    //             id: 1,
    //             image:"https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_CA/games/switch/r/rayman-legends-definitive-edition-switch/hero",
    //             title:"Rayman Legends",
    //             price: 200,
    //             stock:"5",
    //         },
    //         {
    //             id: 2,
    //             image:"https://as01.epimg.net/meristation/imagenes/2020/11/30/analisis/1606716947_243504_1606748672_noticia_normal.jpg",
    //             title:"Visage",
    //             price: 150,
    //             stock:"10",
    //         },
    //         {
    //             id: 3,
    //             image:"https://www.desconsolados.com/wp-content/uploads/2021/12/Have-a-Nice-Death-bdc00a_98dfc0e3d5cc4877ba18511f837e8cf8_mv2.jpg",
    //             title:"Have a Nice Death",
    //             price: 100,
    //             stock:"7",
    //         },
    //         {
    //             id: 4,
    //             image:"https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg",
    //             title:"Fifa 22",
    //             price: 250,
    //             stock:"3",
    //         },
    //         {
    //             id: 5,
    //             image:"https://as01.epimg.net/meristation/imagenes/2021/09/17/avances/1631871790_617942_1631874024_noticia_normal.jpg",
    //             title:"COD Vanguard",
    //             price: 400,
    //             stock:"2",
    //         },
    //     ];

    //     const item = data.filter(item => item.id === parseInt(id)); 
    //     // console.log(item)
    //     setTimeout(() => {
    //         resolve(item[0])
    //     }, 2000)
    // });
    // return myPromise
}

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    // const cartCtx = useContext(CartContext);

useEffect(() => {
    // console.log(id)
    getItem(id)
    .then(snapshot =>  { 
        setItem({ ...snapshot.data(), id: snapshot.id})
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
}, [id]);
return (
    <div className="item-detail-container">
        {
            loading ? <Spinner/> :
        
        <ItemDetail item={item} />}
    </div>
)
}


export default ItemDetailContainer;

