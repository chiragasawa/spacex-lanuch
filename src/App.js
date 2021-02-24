import './App.css';
import Cards from './components/Cards';
import logo from './logo.svg'
// import { useMediaQuery } from 'react-responsive'
function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <div className="logo">
          <a href="/" id="logo">
            <img src={logo} alt="" style={{ height: '200px', paddingLeft: '50px' }} />
          </a>
        </div>
      </header>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
