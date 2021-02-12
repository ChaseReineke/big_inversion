import React from 'react';
import './App.css';

import MainComp from './components/MainComp';

function App() {
  return (
    <div className="App">
      <MainComp FirstName={" Jane"} LastName={"Doe"} Age={"45"} HairColor={"Black"}/>

      <MainComp FirstName={" John"} LastName={"Smith"} Age={"88"} HairColor={"Brown"}/>

      <MainComp FirstName={" Millard"} LastName={"Fillmore"} Age={"50"} HairColor={"Brown"}/>

      <MainComp FirstName={" Maria"} LastName={"Smith"} Age={"62"} HairColor={"Brown"}/>
    </div>
  );
}

export default App;