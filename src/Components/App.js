import React, {useState, useEffect} from 'react';
import '../Style/App.css';
import Navbar from './Navbar';
import {Route, useRouteMatch, useParams, Switch} from 'react-router-dom';
import LangList from './LangList';
import LangDetails from './LangDetails';
import NewLangForm from './NewLangForm';

function App() {
  const params = useParams();
  const [langs, setLangs] = useState([]);
  const [langType, setLangType] = useState('');
  const [langId, setLangId] = useState(1);
  const match = useRouteMatch();

  function changeLangType(newLangType) {
    if (newLangType.toLowerCase() === 'oop' || newLangType.toLowerCase() === 'functional') {
      setLangType(newLangType);
    } else {
      setLangType('');
    }
  }
  function viewLangDetails(newLangId) { 
    setLangId(newLangId);
  }

  function addLang(newLang, newLangType) {
    fetch(`http://localhost:8080/${newLangType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLang)
      });
    setLangs([...langs, newLang]);
  }

  useEffect(() => {
    if (langType != '')
    fetch(`http://localhost:8080/${langType.toString()}`)
      .then(res => res.json())
      .then(setLangs);
  }, [langType]);

  
  return (
    <div className="App">
      <Navbar handleNavClick={changeLangType}></Navbar>
      <Route path="/">
        <Switch>
          <Route path={"/AddLanguage"}>
            <NewLangForm addLang={addLang}></NewLangForm>
          </Route>
          <Route path={`/:langType`}>
            <LangList viewDetails={viewLangDetails} Langs={langs}></LangList>
          </Route>
          <Route path={`/:langType/:langId`}>
            <LangDetails props={langs[langId - 1]}></LangDetails>
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
