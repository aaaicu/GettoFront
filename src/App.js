import React from "react";
import './App.css';
import Body from './layout/Body';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Nav from './layout/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Nav/> 
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
