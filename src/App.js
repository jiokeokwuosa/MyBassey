import React from 'react';
import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./components/pages/Homepage";
import NavBar from "./components/includes/NavBar";

const App=()=>{
  return (
    <>
    <NavBar Homepage={Homepage}/>
    </>
  );
}

export default App;
