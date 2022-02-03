import './newsletter.css';
import axios from 'axios';

function Newsletter() {

    const CancelNewsletterUrl = 'http://localhost:8080/testy//cancel_newesletter';
    

    const sendCancelNewsletter = () => {
        let email = document.getElementById('email').value;
        let output;

        axios.get(
            CancelNewsletterUrl.concat('?adres_email='+email)
        ).then((response) => {
            output = response;
            if( response.status == 200 )
                alert("Newsletter anulowany");
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if( error.response.status == 500 )
                    alert("Wystąpił błąd po stronie serwera prosze spróbowac później!");
                if( error.response.status == 400 )
                    alert("Błąd nie da sie");
            }
          })
    }


return(
    <div className="newsletter">
        <h2>Wypisz się z Newslettera</h2>
        <div className="form">
            <form method="get">
                <label for="email"> Podaj email aby anulować Newsletter.</label><br/><br/>
                <input type="text" id="email" name="email" required/><br/><br/>

                <input type="reset" value="Potwierdź" className='formInput' onClick={() => sendCancelNewsletter ()}/>
                
            </form>
        </div>
    </div>
);
}

export default Newsletter;