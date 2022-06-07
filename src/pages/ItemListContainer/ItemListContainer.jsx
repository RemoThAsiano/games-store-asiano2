import React, { useContext } from 'react'
// import Counter from '../../components/COUNTER/Counter'
import ItemList from '../../components/ItemList/ItemList'
// import getData from '../../services/getData';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';
import './ItemListContainer.css'
import Spinner from '../../components/Spinner/Spinner';


// import CartContextProvider from '../../store/CartContextProvider';

function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = category && query(
    itemCollection,
    where('category', '==', category)
   );

  return getDocs(q || itemCollection);
  // const myPromise = new Promise((resolve, reject) => {
  //   const productList = [
  //       {
  //           id: 1,
  //           image:"https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_CA/games/switch/r/rayman-legends-definitive-edition-switch/hero",
  //           title:"Rayman Legends",
  //           price:"$200",
  //           stock:"5",
  //           category: 'Aventura'
  //       },
  //       {
  //           id: 2,
  //           image:"https://as01.epimg.net/meristation/imagenes/2020/11/30/analisis/1606716947_243504_1606748672_noticia_normal.jpg",
  //           title:"Visage",
  //           price:"$150",
  //           stock:"10",
  //           category: 'Terror'
  //       },
  //       {
  //           id: 3,
  //           image:"https://www.desconsolados.com/wp-content/uploads/2021/12/Have-a-Nice-Death-bdc00a_98dfc0e3d5cc4877ba18511f837e8cf8_mv2.jpg",
  //           title:"Have a Nice Death",
  //           price:"$100",
  //           stock:"7",
  //           category: 'Roguelike'
  //       },
  //       {
  //           id: 4,
  //           image:"https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg",
  //           title:"Fifa 22",
  //           price:"$250",
  //           stock:"3",
  //           category: 'Deportes'
  //       },
  //       {
  //           id: 5,
  //           image:"https://as01.epimg.net/meristation/imagenes/2021/09/17/avances/1631871790_617942_1631874024_noticia_normal.jpg",
  //           title:"COD Vanguard",
  //           price:"$400",
  //           stock:"2",
  //           category: 'Acción'
  //       },
        // {
        //   id: 6,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Terror'
        // },
        // {
        //   id: 7,
        //   image:"https://www.egames.news/__export/1640365996864/sites/debate/img/2021/12/24/dead_by_daylight_regala_250_000_puntos_para_compensar_un_error_que_tardarx_en_solucionarse.jpg_759710130.jpg",
        //   title:"Dead by Daylight",
        //   price:"$150",
        //   stock:"6",
        //   category: 'Terror'
        // },
        // {
        //   id: 8,
        //   image:"https://cnnespanol.cnn.com/wp-content/uploads/2021/08/ea-madden-22-nfl-brady-mahomes.png",
        //   title:"MADDEN 22",
        //   price:"$200",
        //   stock:"4",
        //   category: 'Deportes'
        // },
        // {
        //   id: 9,
        //   image:"https://cdn.akamai.steamstatic.com/steam/apps/1225330/ss_4d48f01cd6c486a937f70ef2361f57d68d75f03f.1920x1080.jpg?t=1614622937",
        //   title:"NBA 2k21",
        //   price:"$200",
        //   stock:"4",
        //   category: 'Deportes'
        // },
        // {
        //   id: 10,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Acción'
        // },
        // {
        //   id: 11,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Acción'
        // },
        // {
        //   id: 12,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Acción'
        // },
        // {
        //   id: 13,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Aventura'
        // },
        // {
        //   id: 14,
        //   image:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/03/it-takes-two-2272899.jpg?itok=fNDHITKf",
        //   title:"It Takes Two",
        //   price:"$400",
        //   stock:"6",
        //   category: 'Aventura'
        // },
        // {
        //   id: 15,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Terror'
        // },
        // {
        //   id: 16,
        //   image:"https://www.residentevil.com/village/assets/images/common/share.png",
        //   title:"Resident Evil Village",
        //   price:"$300",
        //   stock:"4",
        //   category: 'Terror'
        // },
        // {
        //   id: 17,
        //   image:"https://areajugones.sport.es/wp-content/uploads/2020/09/tennis-world-tour-2-portada.jpg",
        //   title:"Tenis World Tour 2",
        //   price:"$250",
        //   stock:"4",
        //   category: 'Deportes'
        // },
      
    // ];
    // const productsfiltered = category ? productList.filter(p => p.category === category) : productList;
    // setTimeout(() => {
    //   resolve(productsfiltered);
    // }, 2000);
    // });
    // return myPromise;
  }

const ItemListContainer = () => {
const [item, setItem] = useState([])
const [loading, setLoading] = useState(true)
const { categoryId } = useParams();

//  useEffect(() => {
  
//    }, [categoryId]);
//FIREBASE

useEffect(() => {
//   const db = getFirestore();

//   const itemCollection = collection(db, 'items');

//   const q = query(
//    itemCollection,
//    where('price', '<', 200),
//    limit(1)
//    );
//  getDocs(q)
 //getDoc(itemCollection) 
    // .then(snapshot => {
     // console.log(snapshot.docs[0].id)
     // console.log(snapshot.docs[0].data)
    //   console.log(snapshot.docs.map(doc => {
    //      return { ...doc.data(), id: doc.id } 
    //   }));
    // })
    // .catch(
    //   err => console.log(err)
    // );
  setLoading(true);
  getProducts(categoryId)
    .then(snapshot => {
      setItem(snapshot.docs.map(doc => { 
        return { ...doc.data(), id: doc.id }}));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => setLoading(false)); //comentado
}, [categoryId]);


    // function agregar(){
    //   console.log('agregaste');
    // }
    
    return (
      <div> {
        loading ? <Spinner/>: 
        <h3>
        <ItemList   className='item-list-container' item ={ item }/> 
        {/* pasarle en vez de item cartCtx.products */}
        </h3>}
        <div>
        {/* <Counter initial={0} stock={10} onAdd={agregar}/> */}
        </div>
      </div>
    )
}

export default ItemListContainer;

//agregar boton de if no hay stock que no me deje agregar

