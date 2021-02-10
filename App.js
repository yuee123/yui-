import React from 'react'
import './App.css';
import myImage from './img/img-me2.jpg';

function App() {
  return (
    <div className="App">
   
      <h1>My reacut app</h1>
      <h2>YuiOtaka</h2>
      <img src={myImage} alt="mypics" />

    </div>
  );
}

export default App;
