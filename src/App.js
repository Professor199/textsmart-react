import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, settextMode] = useState("dark");
  const [textState, settextState] = useState("dark mode enabled");
  const [alert,setalert] = useState("")
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
  }) 
     setTimeout(()=>{
      setalert(null)
     },1500)
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      settextMode("light")
      settextState("dark mode enabled")
      document.body.style.background = "black"
      showAlert("dark mode has been enabled","success")
      // setInterval(()=>{
      //   document.title="vote for bjp 2024"
      // },2000)
      // setInterval(()=>{
      //   document.title="ghar ghar modi!"
      // },1500) 
    }
    else{
      setMode("light")
      settextMode("dark")
      settextState("light mode enabled")
      document.body.style.background = "white"
      showAlert("light mode has been enabled","success")

    }
  }  

  return (
   <>
  {/* //  <Router> */}
   <Navbar title="Textsmart" aboutText="About" mode={mode} toggleMode={toggleMode} textMode={textMode} textState={textState}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert} heading="Enter Text Below" textMode={textMode}></Textform>
    {/* // <Routes>
          //  <Route exact path="/about"element={<About />}></Route> 
          // <Route exact path="/"element={ }></Route>
    // </Routes> */}
   </div>
  {/* // </Router> */}
   </>
  );
}

export default App;
