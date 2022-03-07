import './App.css';
import {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    document.body.style.backgroundColor = (mode === 'light') ? '#042743' : 'white';
    document.title = mode === 'light' ? "TextUtils - Home Dark" : "TextUtils - Home";
    setMode((mode === 'light') ? 'dark' : 'light');

    // blinking the title to gain attention
    // setInterval(() => {
    //   document.title = "Install this";
    // }, 1500);
    // setInterval(() => {
    //   document.title = "You have a virus";
    // }, 2000);

    // I don't wanna show alert here
    // showAlert( ((mode === 'light') ? "Light " : "Dark ") + "mode enabled", "success");
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>  
      <Router>              
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} /> 
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to modify"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;