import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar';

function App() {

  // useEffect(() => {
  //   fetch('localhost:3000/langs')
  // })
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
