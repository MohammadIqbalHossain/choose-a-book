import React, { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';

function App() {

  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, [books])

  return (
    <div className="App">
      <div className="books-container">
      {
        books.map(book => <Books books={book} key={book.id}></Books>)
      }
      </div>
    
    </div>
  );
}

export default App;
