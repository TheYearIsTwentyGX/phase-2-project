import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar';
import {Route, useParams} from 'react-router-dom';
import LangList from './LangList';

function App() {
  const [langs, setLangs] = useState([]);
  const [langType, setLangType] = useState('OOP');

  function changeLangType(newLangType) {
    if (newLangType.toLowerCase() === 'oop' || newLangType.toLowerCase() === 'functional') {
      setLangType(newLangType);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8080/${langType.toString()}`)
      .then(res => res.json())
      .then(setLangs);
  }, [langType]);

  
  return (
    <div className="App">
      <Navbar handleNavClick={changeLangType}></Navbar>
      <Route path="/:langType">
        <LangList Langs={langs}></LangList>
      </Route>
    </div>
  );
}

export default App;
