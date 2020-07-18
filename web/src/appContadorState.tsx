import React, {useState}  from 'react';
import './App.css';
import Header from './Header';


//Conceito de propriedades <Header title="E aí mundo"/> 

function App() {
const [counter, setCounter] = useState(0); //[valor do estado, função para atualizar o valor do estado]

function handleButtonClick () {
setCounter(counter + 1) //Atualizando o valor assim que clicado no botão
}
  return ( 
    <div> 
      <Header title="E aí mundo"/> 
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
