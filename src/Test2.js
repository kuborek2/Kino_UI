import logo from './logo.jpg';
import popcorn from './popcorn.jpg'
import './home.css';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

function Test2() {
  return (
    <header className="App-header">
      <div className="first_pic">
        <div style={{width: "600px"}}>
        <h1>A TRULY</h1>
        <h1>CINEMATIC</h1>
        <h1 >EXPIERENCE</h1>
        </div>
        <img  src={logo} className="App-logo" alt="logo" />
      </div>
      <div id="second_pic">
      <img  src={popcorn} className="popcornPhoto" alt="logo" />
        <div style={{width: "600px"}}>
        <h1> WITHIN </h1>
        <h1> REACH FOR </h1>
        <h1 > EVERYONE </h1>
        </div>
        
      </div>

    </header>

  );
}

export default Test2;
