import Item from "../Item/Item";
import './ItemList.css';
// import Counter from '../COUNTER/Counter'
// import { Link } from 'react-router-dom';


const ItemList = ({ item }) => {
    // console.log("Products en itemList", item)
    return(
        <div className="item-list-container">
            {/* {cantidadDeProductos ?
                    <button><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                    <Counter  initial={0} stock={item.stock} onAdd={addHandler} />} */}
            {item.map((item) => {
                // console.log(item)
                return (
                <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}/>
                
                );
            })}
        </div>
    );
};

export default ItemList;