import React from 'react';
import './Header.css';
import { HiShoppingCart } from 'react-icons/hi';

const Header = (props) => {
//   console.log(props);
  return (
   
    <nav className='navbar'>
    <h1>Choose a book</h1>
    <div className='cart-counter'>
      <span>{props.cart.length}</span>
      <HiShoppingCart className='icon'
      color='#fff' size='30px'/>
    </div>
  </nav>
   
  );
};

export default Header;