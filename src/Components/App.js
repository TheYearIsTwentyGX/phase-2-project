import React, {useState, useEffect} from 'react';
import '../Style/App.css';
import Navbar from './Navbar';
import {Route, Switch, useHistory} from 'react-router-dom';
import LangList from './LangList';
import LangDetails from './LangDetails';
import NewLangForm from './NewLangForm';

function App() {
  const history = useHistory();
  const [langs, setLangs] = useState([]);
  const [langType, setLangType] = useState('');
  const [langId, setLangId] = useState(1);

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
    let newId = '';
    fetch(`http://localhost:8080/${newLangType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLang)
      }).then(response => response.json()).then(newLang => {setLangs([...langs, newLang]); return newLang;}).then(newLang => history.push(`/${newLangType}/${newLang.id}`));
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
          <Route exact path={`/:langType`}>
            <LangList viewDetails={viewLangDetails} Langs={langs}></LangList>
          </Route>
          <Route exact path={`/:langType/:langId`}>
            <LangDetails props={langs[langId - 1]}></LangDetails>
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
