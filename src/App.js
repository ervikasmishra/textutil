//
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Form from './components/Form';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');
  const [alertMode, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#212529";
      document.body.style.color="white";
      showAlert('Dark mode enabled', 'success');

    }
   else{
       setMode('light');
       document.body.style.backgroundColor="white";
       document.body.style.color="black";
       showAlert('Light mode enabled', 'success');
     }
   
   }


  return (
    <>
    <Navbar Title = "TextUtil" Link1 = "Home" Link2 = "About" mode = {mode} toggleMode={toggleMode} />
    <div>
      <Alert mode = {alertMode}/>
    </div>
    <div className="container my-3">
    <Form showAlert={showAlert} heading ="Try textutil - word counter, letter counter, lowercase to uppercase, uppercase to lowercase" mode = {mode}/>
    </div>

    </>
  );
}

export default App;
