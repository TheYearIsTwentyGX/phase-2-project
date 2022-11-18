import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar';
import LangList from './LangList';

function App() {

  let test = [
    {name: "Python"},
    {name: "Java"},
    {name: "C++"},
    {name: "C#"},
    {name: "JavaScript"},
    {name: "Ruby"},
    {name: "PHP"},
    {name: "Swift"},
    {name: "Go"},
    {name: "Rust"},
    //{name: "Kotlin"},
    {name: "Scala"}
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <LangList Langs={test}></LangList>
    </div>
  );
}

export default App;
