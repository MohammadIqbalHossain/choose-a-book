import React, { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Modal from 'react-modal';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Answers from './components/Answers/Answers';
import { FcReading } from 'react-icons/fc';
import { BiCut } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

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

  const modalStyles = {
    overflow: 'scroll',
    maxHeight: '100vh',
    

  }
  Modal.setAppElement('#root');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addToCart = (books) => {
    const newCart = [...cart, books];
    setCart(newCart);
  }

  const getRandomItem = () => {
    const randomNum = cart[Math.floor(Math.random() * cart.length)];
    let newCart = [];
    newCart = [randomNum];
    setCart(newCart);
  }


  const chooseAgain = () => {
    closeModal()
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
      <Header cart={cart} openModal={openModal}></Header>
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
        <div  style={modalStyles}>
          <button className="close" onClick={closeModal}><AiOutlineClose /></button>
          <div>
            {
              cart.map(book => <Cart book={book} key={book.id}></Cart>)
            }
          </div>
          <div className="modal-btns">
            <button onClick={getRandomItem} className="draw-btn">Choose One <FcReading size='25px' /> </button>
            <br />
            <br />
            <button className="draw-btn" onClick={chooseAgain}>Choose Again <BiCut color='red' /></button>
          </div>
          </div>
      </Modal>
      <Answers></Answers>
    </div>
  );
}

export default App;
