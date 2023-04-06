import{ FiSearch } from 'react-icons/fi'
import "./styles.css";
import { useState } from 'react';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');


  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  async function handleSearch() { /* Eu uso async pra transformar essa função em assincrona, porque como vou em outro site, pode demorar */
    if (input ===''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get('${input}/json'); /*get é o tipo de função que quero, trazer informações pra ca; /json é o formato que eu quero trazer*/
      console.log(response)

    }catch{
      alert("CEP invalido");
    }

  }

  return (
    <div className="Container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={inputChangeHandler}
        />

        <button className="buttonSerach" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 79003222</h2>
        
        <span>Rua teste algum</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande- SP</span>

      </main>

    </div>
  );
}

export default App;
