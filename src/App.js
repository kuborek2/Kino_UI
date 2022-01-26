import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Test from './Test.js';
import Test2 from './Test2.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Tickets from './Tickets.js';
import About from './about.js'
function App() {
  return (
    <div >
          <Navigation/>      
          <hr/>
          <Routes>                
             <Route path='/repertuar' element={<Test/>}/>  
             <Route path='/tickets' element={<Tickets/>}/>  
             <Route path='/about' element={<About/>}/> 
             <Route path='/' element={<Test2/>}/>  
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
