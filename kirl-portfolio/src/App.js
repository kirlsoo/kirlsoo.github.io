import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/Navbar/navbar';
import Footer from './components/footer';
import './css/main.css';

//Adding material UI: import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="body"> 
      <NavBar/>
      <Header/> 
      <Footer/>
    </div>
  );
}

export default App;
