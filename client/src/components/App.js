import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from '../components/Login/Login.js';

function App() {
  const [login, setLogin] = useState(true);
  const [register, setReg] = useState(false);
  console.log(login, register)

  if(login){
    return (
      <div className="App">
        <header className="App-header">
          <div className="form">
            <div className='selector'>
              <h1>Welcome! Please Login</h1>
              <button onClick={()=> setLogin(true)}className="button is-dark is-large">Login</button>
              <button onClick={()=> {setLogin(false) && setReg(true)}}className="button is-dark is-large">Register</button>
            </div>
            <Login/>
            </div>
        </header>
      </div>
    );
  }else{
    return (
      <div className="App">
        <header className="App-header">
          <div className="form">
          <div className='selector'>
            <h1>Welcome! Please Register</h1>
            <button onClick={()=> setLogin(true)}className="button is-dark is-large">Login</button>
            <button onClick={()=> {setLogin(false) && setReg(true)}}className="button is-dark is-large">Register</button>
          </div>
          <Login/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
