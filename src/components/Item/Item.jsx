import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({id, title, price, image}) => {
    return (
        
        <div className="card text-white bg-secondary mb-3">
            <div>
            <Link to={'/item/' + id} className="detail">
            <h3 className="card-header">{title}</h3>
            <img src={image} width={300}></img>
            <h4 className="card-header">{price}</h4> 
            </Link>
            </div>
            {/* <imgsrc={ image} */}
        </div>
        
        // <link to={`/products/${id}`}></link>
           
    );
    
};

export default Item;