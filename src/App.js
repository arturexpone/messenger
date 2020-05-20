import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/login/Login";
import Messenger from "./components/messenger/Messenger";

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <Login />}/>
      <Route path='/messenger' render={() => <Messenger />} />
    </div>
  );
}

export default App;
