import'./reservation.css';

import React,{useState,useEffect} from 'react';
import axios from 'axios';







function Reservation() {

const [seans, setSeans] = useState([]);
const [film, setFilm] = useState('');
const filmUrl = 'http://localhost:8080/api/v1/seanse';
const testUrl = 'http://localhost:8080/api/v1/seans?id=5';

React.useEffect(() => {
    axios.get(testUrl).then((response) => {
        setFilm(response.data);
    });
  }, []);
 
  console.log(film);





    return(
        <div className = 'mainBox'>
            
            <div className ='filmInfo'>
                <div className ='filmPhoto'>
                    <div class=''>
                        <img className="img-top" src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362' class='card-img-top' id="film-poster" alt='...' />
                    </div>
                </div>

            
                <div class="card-content" id="film-1">
                    <h4 className="title_h4" id="film-title">Title</h4>
                        <article type="text">Reżyser: <span id="rezyser"> </span></article>
                        <article type="text">Rok premiery: <span id="rocznik"> </span></article>
                        <article type="text">Data: <span id="data"> </span></article>
                        <article type="text">Godzina: <span id="godzina"> </span></article>
                    <p class="description" id="description">
                        jakis tam opis
                    </p>
                </div>
            </div>

            <div className ='filmReservation'>
                <form class="rez-form" name="rez-form" id="rez-function">

                    <fieldset class="form-col-1">
                    <div className='separateDiv'>
                        <div className ="information">
                            <div class="form-section">
                            <br/>
                                <label for="name">Imię: <br/></label>
                                    <input id="name" name="name" type="text" required/>
                            </div>

                            <div class="form-section">
                            <br/>
                                <label for="surname">Nazwisko: </label><br/>
                                    <input id="surname" name="surname" type="text" required/>
                            </div>

                            <div class="form-section">
                            <br/>
                                <label for="email">Email: </label><br/>
                                    <input id="email" name="email" type="email" required/>
                                    
                            </div>

                            <div class="form-section">
                            <br/>
                                <label for="newsletter">Czy chcesz otrzymywac newsletter: </label> 
                                <input id="newsletter" name="newsletter" type="checkbox" required/>
                                
                                    
                            </div>
                            
                            <div class="button-box">
                            <br/>
                                <button type="submit" class="btn-submit" id="btn-submit">Potwierdz</button>
                                <button type="reset" class="btn-reset">Wyczysc</button>
                            </div>
                        </div>

                        <div className="seats">

                            <div class="form-section">
                                    <label for="ticket-type">Rodzaj biletu: <br/></label>
                                        <select name="ticket-type" id="ticket-type" class="ticket-type" onchange="DropDownListHandler()">
                                        </select><br />
                                </div>
                                
                                <div class="form-table-section">
                                    <label for="seat">Wybierz miejsce:</label> <br/>
                                    
                                
                            </div>


                        </div>
                    </div>    
                    </fieldset>

                    

                   
                    
                </form>
            </div>

            
        </div>
    );

}


export default Reservation;