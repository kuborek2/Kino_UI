import logo from './logo.svg';
import './tickets.css';
import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ReactPictureGrid } from 'react-picture-grid';
import {Link} from 'react-router-dom';


function Tickets() {

  return (
    <div className='cont'>
        <h1 style={{marginBottom: "10vh", fontSize: "50px", marginLeft: "50vh"}} >Bilety</h1>
        <div className="when">
        <h3 style={{ fontSize: "20px", marginLeft: "50vh"}}>Wcześniej kupisz taniej</h3>
        <h3 style={{ fontSize: "20px", marginLeft: "60vh"}}>W dniu seansu</h3>
        </div>
        <div className="tic_tab">
            <div className="days">
            <h4 style={{marginLeft: "20vh",fontWeight: "400"}}>3 dni przed seansem</h4>
            <h4 style={{marginLeft: "5vh", fontWeight: "400"}}>2 dni przed seansem</h4>
            <h4 style={{marginLeft: "5vh", fontWeight: "400"}}>1 dzień przed seansem</h4>
            </div>
            <div className="type">
                <h3 style={{ fontSize: "20px", marginLeft: "2vh",fontWeight: "500",paddingTop:"8px"}}>Bilet na film</h3>
                <h2 style={{ fontSize: "26px", marginLeft: "10vh"}}>18 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>20 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>23 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "36vh"}}>26 zł</h2>
            </div>
            <div className="type">
                <h3 style={{ fontSize: "20px", marginLeft: "2vh",fontWeight: "500",paddingTop:"0px"}}>Bilet na film<br></br>familijny</h3>
                <h2 style={{ fontSize: "26px", marginLeft: "10vh"}}>18 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>19 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>22 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "36vh"}}>24 zł</h2>
            </div>
            <div className="type">
                <h3 style={{ fontSize: "20px", marginLeft: "2vh",fontWeight: "500",paddingTop:"8px"}}>GIGAWTOREK!</h3>
                <h2 style={{ fontSize: "26px", marginLeft: "70px"}}>17 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>17 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "15vh"}}>17 zł</h2>
                <h2 style={{ fontSize: "26px", marginLeft: "36vh"}}>17 zł</h2>
            </div>
        </div>
    </div>
  );
}

export default Tickets;


