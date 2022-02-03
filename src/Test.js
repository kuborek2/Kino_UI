import logo from './logo.svg';
import './repertuar.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ReactPictureGrid } from 'react-picture-grid';
import {Link} from 'react-router-dom';
import rep1 from './27.01.json';
import rep2 from './28.01.json';
import rep3 from './29.01.json';
import soon1 from './soon1.json';
import soon2 from './soon2.json';
function Test({navigation, Route}) {

  const [dateButtonArray, setdateButtonArray] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDay, setCurrentDay] = useState(0);
  const [seanses, setSeanses] = useState([]);
  const [seansesToDisplay, setSeansesToDisplay] = useState([]);
  const [date, setDate] = useState([]);
  const [films, setFilms] = useState([]);
  const filmsUrl = 'http://localhost:8080/api/v1/films';
  const seasesUrl = 'http://localhost:8080/api/v1/seanse';
  // const testUrl = 'http://localhost:8080/api/v1/seans?id=5';

  const moveToBiletSellSite = () => {
    navigation.navigate()
  }

  React.useEffect(() => {
    if ( currentMonth== 0 && currentDay == 0 ){
      let date = new Date();
      setCurrentMonth(date.getUTCMonth() + 1); //months from 1-12 as current moonth
      setCurrentDay(date.getUTCDate()); // current day
    }
    dateButtonArraySetter();
      axios.get(filmsUrl).then((response, config) => {
          setFilms(response.data); });
      axios.get(seasesUrl).then((response) => {
        setSeanses(response.data);
      }).then(() => {checkCurrentSeanses();});
    }, [seanses], [films]);

  const checkElemntInTable = (array ,value) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if( array[i][j] != null)
          if( array[i][j].idf == value.idf )
            return [i,j];
      }
    }
    return -1;   // Not found
  }

  const dateButtonArraySetter = () => {
    let tempArray = new Array(5);
    var date = new Date();
    for( let i = 0; i < dateButtonArray.length; i++ ){
      let string = "";
      if( i == 0 )
        date.setDate(date.getDate() + 0);
      else
        date.setDate(date.getDate() + 1);
      let month = date.getUTCMonth() + 1; //months from 1-12 as current moonth
      let day = date.getUTCDate(); // current day
      tempArray[i] = string.concat(month,'.',day);
    }
    setdateButtonArray(tempArray);
  }

  const changeCurrentData = (valueInDays) => {  
    var date = new Date();
    date.setDate(date.getDate() + valueInDays);
    setCurrentMonth(date.getUTCMonth() + 1); //months from 1-12 as current moonth
    setCurrentDay(date.getUTCDate()); // current day
  }

  const checkCurrentSeanses = () => {
    let currSeanesToDisplay = [];

    const m = 4;
    const n = 2; 
    let currentSeansesTable = new Array(m); // create an empty array of length n
    // makeing arrray 2 dimmesinal
    for (var i = 0; i < m; i++) {
      currentSeansesTable[i] = new Array(n); // make each element an array
    }
    if( seanses != undefined ){
      seanses.map((seansElement) => {
        let seansDate = seansElement.dzien.split("-")
        if( currentMonth == parseInt(seansDate[1]) ){
          if( currentDay == parseInt(seansDate[2]) ){

            currSeanesToDisplay.push(seansElement)
          // end of day if
          }
        // end of month if
        }
      // end of map
      })
    setSeansesToDisplay(currSeanesToDisplay);
    }
  }

  return (
    <div className='cont'>
      <div className="teraz_gramy">
        <h1 style={{marginLeft:"4%"}}>Teraz Gramy</h1>
      </div>
      <div className="cos">
      <div className="cal">
      <button className="card" onClick={()=>{changeCurrentData(0)}}>
        <h7 className="date">Czw</h7>
        <h7>{dateButtonArray[0]}</h7>
      </button>
      <button className="card" onClick={()=>{changeCurrentData(1)}}>
        <h7 className="date">Pt</h7>
        <h7>{dateButtonArray[1]}</h7>
      </button>
      <button className="card" onClick={()=>{changeCurrentData(2)}}>
        <h7 className="date">Sb</h7>
        <h7>{dateButtonArray[2]}</h7>
      </button>
      <button className="card" onClick={()=>{changeCurrentData(3)}}>
        <h7 className="date">Nd</h7>
        <h7>{dateButtonArray[3]}</h7>
      </button>
      <button className="card" onClick={()=>{changeCurrentData(4)}}>
        <h7 className="date">Pn</h7>
        <h7>{dateButtonArray[4]}</h7>
      </button>
    </div>
      <div className="row">
        
        {seansesToDisplay.map(cos =>(
          <div className="column">
            {/* <Link  id="link" to="/reservation"> */}
            <Link style={{textDecoration: 'none',}}  to={
                {     
                  pathname: '/reservation?id_se='+cos.id_se,
                  state: cos.id_se,
                }
            }> 
            <h2>{cos.tytul}</h2>
            {/* <a href={cos.link} target="_blank" rel="noopener noreferrer"> */}
              <img style={{paddingLeft: "15%"}} src={cos.zdjecie}></img>
            {/* </a> */}
            <h3>{cos.godzina.slice(0, 5)}</h3>
            {/* <h3><a  style={{textDecoration: "none"}} href="/">{cos.seans1}</a></h3>
            <h3><a  style={{textDecoration: "none"}} href="/">{cos.seans2}</a></h3> */}
            </Link>
        </div>
        ))}
        
      </div>
      </div>
      <div className="teraz_gramy">
        <h1 style={{marginLeft:"4%"}}>Wkrótce</h1>
      </div>
      <div className="cos">
        <div className="row">
          {films.map(cos =>(
            <div className="column">
              <h2>{cos.tytul}</h2>
              <a href={cos.zdjecie} target="_blank" rel="noopener noreferrer">
                <img style={{paddingLeft: "10%"}} src={cos.zdjecie}></img>
              </a>
            </div>
          ))} 

        </div>

      </div>

    </div>
  );
}

export default Test;


