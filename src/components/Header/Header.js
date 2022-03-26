import React from 'react';
import './Header.css';
import { HiShoppingCart } from 'react-icons/hi';

const Header = ({cart, openModal}) => {
  
  return (
   
    <nav className='navbar'>
    <h1>Choose a book</h1>
    <div className='cart-counter' onClick={openModal}>
      <span>{cart.length}</span>
      <HiShoppingCart className='icon'
      color='#fff' size='30px'/>
    </div>
  </nav>
   
  );
};

export default Header;