import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Cart.css';

const Cart = ({ book }) => {
    const { name, picture } = book;
    return (
        <div>
            <div className="cart-container">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <MdDelete size='30px' />
            </div>
        </div>
      
         
        
    );
};

export default Cart;