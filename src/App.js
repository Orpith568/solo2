import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="orpith" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;
