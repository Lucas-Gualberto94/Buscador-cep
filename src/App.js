import{ FiSearch } from 'react-icons/fi'
import "./styles.css";
import { useState } from 'react';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const[cep, setCep] = useState({});


  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  async function handleSearch(){ /* Eu uso async pra transformar essa função em assincrona, porque como vou em outro site, pode demorar */
    if(input ===''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`); /*get é o tipo de função que quero, trazer informações pra ca; /json é o formato que eu quero trazer*/
      setCep(response.data)
      setInput('');

    }catch{
      alert("CEP invalido");
      setInput('') /*pra limpar o input*/
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
        <h2>CEP: {cep.cep}</h2>
        
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}- {cep.uf}</span>

      </main>

    </div>
  );
}

export default App;
