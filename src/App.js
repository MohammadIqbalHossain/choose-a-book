import React, { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Modal from 'react-modal';
import Cart from './components/Cart/Cart';

function App() {

  const [books, setBooks] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
 

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const addToCart = (books) => {
    // console.log('Hello', books);
    const newCart = [...cart, books];
    setCart(newCart);
  }

 const getRandomItem = () => {
    const randomNum = Math.floor(Math.random() * cart.length);
    let newCart = [];
    console.log(randomNum);
    for(const index of cart){
     newCart = [index];
    }
   setCart(newCart);
 }


 const chooseAgain = () => {
   let newCart = [];
   setCart(newCart);
 }


  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, [])

  return (
    <div className="App">
       <button onClick={openModal}>Open</button>
      <div className="books-container">
       
        {
          books.map(book => <Books books={book} key={book.id} addToCart={addToCart}></Books>)
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
        {
        cart.map(book => <Cart book={book} key={book.id}></Cart>)
        }
        </div>
        <div className="modal-btns">
        <button onClick={getRandomItem} className="draw-btn">Draw</button>
        <button onClick={chooseAgain}>Choose Again</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
