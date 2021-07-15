import './App.css';
import Header from './components/Header/header';
import NavBar from './components/Navbar/navbar';
import AboutMe from './components/About/aboutme';
import Footer from './components/footer';
import Skills from './components/Skills/skills';


 
//Adding material UI: import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="app"> 
      <NavBar/>
      <div className="sections">
        <Header/> 
        <AboutMe/>
        <Skills/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
