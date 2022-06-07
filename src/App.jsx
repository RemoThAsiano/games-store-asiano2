
import './App.css';
// import axios from 'axios';
import NavBar from './components/NAVBAR/NavBar';
// import Input from './components/Input/input';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
// // import Counter from './components/COUNTER/Counter';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';
// import CartContext from './store/CartContextProvider';

function App() {

  // const extraerValor = (valorDelInput) => {
  //   return console.log(valorDelInput);
  // }

  return (
    <div className="App">
      {/* <CartContext.Provider value={{
        products: [
          {
            id: 1,
            image:"https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_CA/games/switch/r/rayman-legends-definitive-edition-switch/hero",
            title:"Rayman Legends",
            price:"$200",
            stock:"5",
            category: 'Aventura'
        },
        {
            id: 2,
            image:"https://as01.epimg.net/meristation/imagenes/2020/11/30/analisis/1606716947_243504_1606748672_noticia_normal.jpg",
            title:"Visage",
            price:"$150",
            stock:"10",
            category: 'Terror'
        },
        ]
      }}> */}
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      {/* </CartContext.Provider> */}
      
    </div>
  );
}

export default App;
