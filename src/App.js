import './App.css';
import Form from './component/Form/Form.js';
import React,{useState} from 'react';
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
    <header>
   <h1>Vignesh Todo Application</h1>
   </header>
   <Form inputText={inputText} setInputText={setInputText}/>
  
  </div>
   
  );
}

export default App;
