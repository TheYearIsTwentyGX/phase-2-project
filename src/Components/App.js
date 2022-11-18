import React, {useState, useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
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
      <Route path="/OOP">
        <LangList Langs={test}></LangList>
      </Route>
      <Route path="/functional">
        <LangList Langs={test.slice(0, 5)}></LangList>
      </Route>
    </div>
  );
}

export default App;
