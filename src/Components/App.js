import React, {useState, useEffect} from 'react';
import '../Style/App.css';
import Navbar from './Navbar';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import LangList from './LangList';
import LangDetails from './LangDetails';

function App() {
  const [langs, setLangs] = useState([]);
  const [langType, setLangType] = useState('OOP');
  const [langId, setLangId] = useState(1);
  const match = useRouteMatch();

  function changeLangType(newLangType) {
    if (newLangType.toLowerCase() === 'oop' || newLangType.toLowerCase() === 'functional') {
      setLangType(newLangType);
    }
  }
  function viewLangDetails(newLangId) { 
    setLangId(newLangId);
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
        <Switch>
          <Route exact path={`/:langType`}>
            <LangList viewDetails={viewLangDetails} Langs={langs}></LangList>
          </Route>
          <Route exact path={`/:langType/:langId`}>
            <LangDetails props={langs[langId]}></LangDetails>
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
