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
function Test() {

  const [seans, setSeans] = useState([]);
  const [film, setFilm] = useState([]);
  const filmUrl = 'http://localhost:8080/api/v1/seanse';
  const testUrl = 'http://localhost:8080/api/v1/seans?id=5';

  React.useEffect(() => {
      axios.get(filmUrl).then((response) => {
          setFilm(response.data);
      });
    }, []);
  
 

  


  const [data,setData] = useState([
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
      title: 'Scream',
      link : "https://www.themoviedb.org/movie/646385-scream",
      seans1: '11:30 2D NAPISY',
      seans2: '16:50 2D NAPISY'
    },
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      title: 'Spider-Man: No Way Home',
      link : "https://www.themoviedb.org/movie/634649-spider-man-no-way-home",
      seans1: '13:30 2D DUBBING',
      seans2: '20:00 2D NAPISY'
    },
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nj5HmHRZsrYQEYYXyAusFv35erP.jpg',
      title: "The King's Man",
      link : "https://www.themoviedb.org/movie/476669-the-king-s-man",
      seans1: '15:00 2D NAPISY',
      seans2: '17:30 2D NAPISY'
    },
    {
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
      title: 'The Matrix Resurrections',
      link : "https://www.themoviedb.org/movie/624860-the-matrix-resurrections",
      seans1: '12:15 2D NAPISY',
      seans2: '18:30 2D NAPISY'
    },
  ])

  return (
    <div className='cont'>
      <div class="teraz_gramy">
        <h1 style={{marginLeft:"4%"}}>Teraz Gramy</h1>
      </div>
      <div class="cos">
      <div class="cal">
      <button class="card" onClick={()=>{setData(rep1)}}>
        <h7 class="date">Czw</h7>
        <h7>27.01</h7>
      </button>
      <button class="card" onClick={()=>{setData(rep2)}}>
        <h7 class="date">Pt</h7>
        <h7>28.01</h7>
      </button>
      <button class="card" onClick={()=>{setData(rep3)}}>
        <h7 class="date">Sb</h7>
        <h7>29.01</h7>
      </button>
      <button class="card" onClick={()=>{setData(rep2)}}>
        <h7 class="date">Nd</h7>
        <h7>30.01</h7>
      </button>
      <button class="card" onClick={()=>{setData(rep1)}}>
        <h7 class="date">Pn</h7>
        <h7>31.01</h7>
      </button>
    </div>
      <div class="row">
        
        {data.map(cos =>(
          <div   class="column">
          <h2>{cos.title}</h2>
          <a href={cos.link} target="_blank" rel="noopener noreferrer">
          <img style={{paddingLeft: "15%"}} src={cos.image}></img>
          </a>
          <h3><a  style={{textDecoration: "none"}} href="tickets">{cos.seans1}</a></h3>
          <h3><a  style={{textDecoration: "none"}} href="tickets">{cos.seans2}</a></h3>
        </div>
        ))}
        
      </div>
      </div>
      <div class="teraz_gramy">
        <h1 style={{marginLeft:"4%"}}>Wkrótce</h1>
      </div>
      <div class="cos">
      <div class="row">
       
        
        
      </div>
      <div style={{marginTop: "2%"}} class="rowBot">
      <div>
        <div className="mapFilms">
          {film.map(film1 =>(
            <div   class="column">
            <span className='filmTitle'>{film1.tytul}</span>          
            <img style={{paddingTop:"10%",paddingLeft: "15%"}} src={film1.zdjecie}></img>   
          
          </div>
          ))}
        </div>
      </div>
      {/* {soon2.map(cos =>(
          <div class="column">
            <h2>{cos.title}</h2>
            <a href={cos.link} target="_blank" rel="noopener noreferrer">
              <img style={{paddingLeft: "10%"}} src={cos.image}></img>
            </a>
          </div>
        ))}  */}
      </div>
      </div>
    </div>
  );
}

export default Test;


