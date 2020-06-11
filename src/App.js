import React from 'react';
import './App.css'
import InputboxContainer from "./components/Inputbox/InputboxContainer";
import ListContainer from "./components/List/ListContainer";


function App(props) {
  return (
    <div className='app'>
        <ListContainer />
        <InputboxContainer />
    </div>
  );
}

export default App;
