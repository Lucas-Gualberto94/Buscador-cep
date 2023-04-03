import{ FiSearch } from 'react-icons/fi'
import "./styles.css";

function App() {
  return (
    <div className="Container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button className="buttonSerach">
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
