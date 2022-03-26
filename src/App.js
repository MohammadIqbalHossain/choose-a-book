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

  //useStates 
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

  //Function for opening modal
  function openModal() {
    setIsOpen(true);
  }

  //Function for closing modal
  function closeModal() {
    setIsOpen(false);
  }

  //Function for Adding books in the cart.
  const addToCart = (books) => {
    const newCart = [...cart, books];
    setCart(newCart);
  }

  //Function for getting a random item from added cart.
  const getRandomItem = () => {
    const randomNum = cart[Math.floor(Math.random() * cart.length)];
    let newCart = [];
    newCart = [randomNum];
    setCart(newCart);
  }


  //Funciton for Choose again button in the modal cart.
  const chooseAgain = () => {
    closeModal()
    let newCart = [];
    setCart(newCart);
  }

  //Loading data from lcoal file.
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
        <div>
          
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
