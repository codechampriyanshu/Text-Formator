//We will start editing from app.js
import logo from './logo.svg';
import './App.css';
import '../src/components/Navbar';
import '../src/components/Textform';
import Textform from '../src/components/Textform';
import Navbar from '../src/components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
//we will import these to set react router 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.js';
function App() {
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const [Mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("dark mode is enabled", "success");
      // document.title = 'Text-DarkMode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light is enabled", "success");
    }

  }
  return (
    //jsx likha hai actually -->> jsx is a HTML jisne javascript likha hai
    //Certain keywords are reserved 
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home title="Text Modifier" Mode={Mode} toggleMode={toggleMode} aboutText="About Text-Modifier" />}></Route>
          <Route path='/about' element={<About title="Text Modifier" Mode={Mode} toggleMode={toggleMode} aboutText="About Text-Modifier" />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;