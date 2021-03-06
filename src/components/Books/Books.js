import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import './Books.css'

const Books = ( {books, addToCart} ) => {
   const {name, picture, price} = books;
    return (
        <div className="books-info">
           <img src={picture} alt=""/>
           <h2>{name}</h2>
           <h2>Price: ${price}</h2>
           <div className="add-to-cart" onClick={() => addToCart(books)}>
               <button className="add-btn" >Add to Cart</button>
               <RiShoppingCart2Fill size='30px' color='#485368'/>
           </div>
        </div>
        
    );
};

export default Books;