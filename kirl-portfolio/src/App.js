import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/main';
import Footer from './components/footer';
import './css/main.css';


function App() {
  return (
    <div className="body"> 
      <Header/>
      <Banner/>
      <footer/>
    </div>

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi welcome to my website.However, it's still under development.
        </p>

        <p>
          Come back next time! :)
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

  );
}

export default App;
