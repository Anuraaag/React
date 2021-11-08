import './App.css';
import {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/> {/* sending the function toggleMode to navbar. Navebar will call the function. */}
      <Alert alert={alert} /> {/* Not sending the function here, because alert doesn't have any decision to make. All it needs is values for alert*/}
      <div className="container">
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> {/* Here again, we have decisions to make to call the function*/}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
