import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import './Books.css'

const Books = ( {books, addToCart} ) => {
//    console.log(books);
   const {name, picture, price} = books;
    return (
        <div className="books-info">
           <img src={picture} alt=""/>
           <h1>{name}</h1>
           <h2>${price}</h2>
           <div className="add-to-cart">
               <button className="add-btn" onClick={() => addToCart(books)}>Add to Cart</button>
               <RiShoppingCart2Fill size='30px' color='#485368'/>
           </div>
        </div>
        
    );
};

export default Books;