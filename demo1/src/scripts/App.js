import React, {Component} from 'react';
import '../css/App.css';
import NavBar from './NavBar'
import Button from './Button'
import Input from './Input'
import NavButton from './NavButton'



function App() {
  return (
    <div className="App">
        <NavBar title={"Ruyue & Yufei"}>
            <NavButton name="About"/>
            <NavButton name="Calculate"/>
            <NavButton name="Team"/>
            <NavButton name="Contact"/>
        </NavBar>
      <Input/>
    </div>
  );
}


export default App;
