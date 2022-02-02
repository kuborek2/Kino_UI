import'./reservation.css';

import React,{useState,useEffect} from 'react';
import axios from 'axios';






function Reservation() {

    let url = document.URL;
    let params = (new URL(url)).searchParams;

    const thisSeansId = params.get('id_se');
    const [seans, setSeans] = useState({});
    const testUrl = 'http://localhost:8080/api/v1/seans?id=';
    const purchaseRequestUrl = 'http://localhost:8080/orders/rezerwacja';

    function DropDownListHandler(){
        var x = document.getElementById("ticket-type").value;
        if( x.includes('Normalny') ){
            document.getElementById('normalSeats').style.display = 'block';
            document.getElementById('vipSeats').style.display = 'none';
        } else if( x.includes('VIP') ){
            document.getElementById('normalSeats').style.display = 'none';
            document.getElementById('vipSeats').style.display = 'block';
        } 
    }

    const renderSeatsUI = (table, style) => {
        let row = 1;
        let layout;
        if( table != null & table != undefined ){
            layout = table.map((elem, index) => {
                let addWhiteSpace = false;
                if( index != 0 ){
                    if( parseInt(index%9) == 0 ){
                        addWhiteSpace = true;
                        row = parseInt(index/9+1)
                    }  
                }

                let str = "";
                if( addWhiteSpace ){
                    if( elem == false ){
                        return (
                            <span key={str.concat(parseInt(index/9+1)+1,"-",(index%9+1))}>
                                <br/><div className={style}><input type='radio' name='seat' value={str.concat(parseInt(index/9)+1,"-",(index%9+1))} required/></div>
                            </span>
                        );
                    } else if( elem == true ){
                        return (
                            <span key={str.concat(parseInt(index/9+1)+1,"-",(index%9+1))} >
                                <br/><div className='disabledInput'><input type='radio' name='seat' value={str.concat(parseInt(index/9)+1,"-",(index%9+1))} required disabled/></div>
                            </span>
                        );
                    }
                } else {
                    if( elem == false ){
                        return (
                            <span key={str.concat(parseInt(index/9+1)+1,"-",(index%9+1))}>
                                <div className={style}><input type='radio' name='seat' value={str.concat(parseInt(index/9)+1,"-",(index%9+1))} required/></div>
                            </span>
                        );
                    } else if( elem == true ) {
                        return (
                            <span key={str.concat(parseInt(index/9+1)+1,"-",(index%9+1))}>
                               <div className='disabledInput'><input type='radio' name='seat' value={str.concat(parseInt(index/9)+1,"-",(index%9+1))} required disabled/></div>
                            </span>
                        );
                    }
                }
                    
            })
        }
        return layout;
    }

    const sendPurchaseRequest = () => {
        let imie = document.getElementById('fname').value;
        let nazwisko = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let isChecked = document.getElementById('zgoda').checked;
        let ele = document.getElementsByName('seat');

        let ele_checked
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                ele_checked = ele[i].value
        }
        let seat = ele_checked.split('-');

        let cena;
        let typ;
        let x = document.getElementById("ticket-type").value;
        if( x.includes('Normalny') ){
            cena = seans.cena_zwykly;
            typ = 'normalny'
        } else if( x.includes('VIP') ){
            cena = seans.cena_vip;
            typ = 'vip'
        }

        let output;

        axios.get(
            purchaseRequestUrl.concat('?imie='+imie
                    + '&nazwisko=' + nazwisko
                    + '&nazwa_filmu=' + seans.tytul
                    + '&data=' + seans.dzien
                    + '&godz=' + seans.godzina
                    + '&cena=' + cena
                    + '&rzad=' + seat[0]
                    + '&miejsce=' + seat[1]
                    + '&typ=' + typ
                    + '&id_seansu=' + seans.id_se
                    + '&email=' + email
                    + '&zgoda=' + isChecked)
                ).then((response) => {
                    output = response;
                    if( response.status == 200 )
                        alert("Bilet został zaarezewowany! Prosze sprawdź swój email!");
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        if( error.response.status == 400 )
                            alert("To miejsce zostało już zajęte! Proszę odświeżyć stronę!");
                        if( error.response.status == 500 )
                            alert("Wystąpił błąd po stronie serwera prosze spróbowac później!");
                    }
                  });;
         
    }
    
    React.useEffect(() => {
        axios.get(testUrl.concat(thisSeansId)).then((response) => {
            setSeans(response.data);
        });
        // console.log(seans)
        if( seans.godzina != null & seans.godzina != undefined )
            seans.godzina = seans.godzina.slice(0, 5)
    }, [seans]);

    return(
        <div className='mainBox'>

            <div className="purchaseDetail">
                
                <h3>Szczegół zakupu:</h3>
                <div className='content'>

                    <div className="form">
                        <form method="get">
                            <label for="fname">Podaj Imię:</label><br/>
                            <input type="text" id="fname" name="fname" required/><br/><br/>

                            <label for="lname">Podaj Nazwisko:</label><br/>
                            <input type="text" id="lname" name="lname" required/><br/><br/>

                            <label for="email">Podaj adres email:</label><br/>
                            <input type="text" id="email" name="email" required/><br/><br/>

                            <input type="radio" id="zgoda" name="zgoda" value="zgoda"/>
                            <label for="lname"> Czy wyrażasz zgodę na newsletter ?</label><br/><br/>

                            <input type="reset" value="Potwierdź" className='formInput' onClick={() => sendPurchaseRequest()}/>
                            <input type="reset" value="Reset" className='formInput'/>
                        </form>
                    {/* koniec diva form */}
                    </div>

                    <div className="smallSeparator"/>

                    <div className="sitChooserContainer">
                        <h3>Wybór miejsca:</h3>

                        <select name="ticket-type" id="ticket-type" className="ticket-type" defaultValue={"normal"} onChange={() => DropDownListHandler()}>
                            <option key="{Normalny}" value="Normalny">Zwykły</option>
                            <option key="{VIP}" value="VIP">VIP</option>
                        </select>

                        {/* <DropDownList
                            className='select'
                            data={ticketList}
                            textField="text"
                            dataItemKey="id"
                            value={ticketState.value}
                            onChange={handleChange}
                        /> */}

                        <div className="visualSits">
                            <div id='normalSeats'>
                                {renderSeatsUI(seans.miejsca_zwykle, 'normalEnabled')}
                            </div>
                            <div id='vipSeats'>
                                {renderSeatsUI(seans.miejsca_vip, 'vipEnabled')}
                            </div>
                        </div>

                    {/* koniec diva sitChooserContainer */}
                    </div>
                 {/* Koniec Diva content */}
                </div>
            {/* Koniec purchaseDetail */}
            </div>

            <div className="separator"/>

            <div className="film-info">
                <img src={seans.zdjecie}/>
                <div> 
                    <article>Dzień ekranizacji: <br/> <span>{seans.dzien}</span> </article>
                    <article>Godzina ekranizacji: <br/> <span>{seans.godzina}</span> </article>
                    <article>Tytuł filmu: <br/> <span>{seans.tytul}</span> </article>
                </div>
            </div>

        </div>
    );

}


export default Reservation;