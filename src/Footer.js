import React from "react"
import app_footer from './app_footer.png';
import './footer.css';
const Footer = () => <footer className="page-footer font-small blue pt-4">
    
    <div className="footer_pic" >
        <div style={{color:"white",marginRight: "50%",minWidth: "20vh"}}>
        <img src= {app_footer} style={{height: "50px",width: "50px",paddingRight: "1px",}}></img> 
        <h5 style={{color:"white"}}>Aplikacja</h5>
        </div>
        <div className="lol" style={{color:"white",paddingRight: "1%",marginLeft: "10%"}}>
            <h4 style={{fontWeight: 900}}>Skontaktuj się z nami</h4>
            <h5>Rezerwacja dla grup: 124 546 321</h5>
            <h5>Eclipse Cinema, ul. Długa 44</h5>
            <a href="/newsletter" style={{textDecoration: "none"}}><h5>Wypisz się z newsletter'a</h5></a>
        </div>
        
    </div>
    <div style={{color: "white", backgroundColor: "#0d0d0d",paddingBottom: "10px", paddingLeft: "10px"}}>© 2020 Copyright: Katedra Informatyki PWSZ
    </div>

        

</footer>

export default Footer