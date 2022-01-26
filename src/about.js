
import './about_us.css';

import React from 'react';
import audience from './audience.jpg';




function About() {


  return (
    <div>   
      <div className="abc">
        <div className="insideAbout">
        <div className="about">
          O Kinie
        </div>
        <div className="photoHolder">
          <div className="photoText"> 
            <p> Miłośnicy kina znajdą u nas nie tylko  </p>
            <p> najnowsze Hity ale również wiele klasyków.</p>
            <p> Wspaniałe filmy dla całych rodzin i nie tylko ! </p>
            <p> Każdy znajdzie u Nas rozrywkę odpowiednią </p>
            <p> dla siebie. </p>
          </div>
          
          <img  src={audience} className="Audience-photo" alt="audience" />

        </div>
        <div className="Open">
          <div className="openTime">
          Godziny Otwarcia:
          </div>

          <div className="openTime1">
          <p className="time">Pon-Pt : 9:00 - 22:00</p>
          <p className="time">Sob : 10:00 - 22:00</p>
          <p className="time">Nied : 11:00 - 22:00</p>
          </div>
        </div>
        
        
      
       
      </div> 
    </div>
   </div>

    );
}

export default About;


