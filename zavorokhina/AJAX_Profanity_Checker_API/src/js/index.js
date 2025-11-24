import $ from 'jquery';
import '../scss/custom.scss';
import _ from 'lodash';

let formData = "";
let checker;

window.sendMessage = async function(event) {
    event.preventDefault();
    formData = document.getElementById('myForm1Text').value;
    checker = document.getElementById('myChecker');
    console.log({formData});

    let con = new XMLHttpRequest();
    con.open('POST', 'https://vector.profanity.dev');
    con.setRequestHeader( 'Content-Type', 'application/json');
    con.responseType = 'json';

    let result;

    con.onreadystatechange = function() {
        if (con.readyState === 4) {
            if (con.status === 200) {
                console.log('Успех:', con.response);
                result = con.response;
                if(result.isProfanity == true){
                    let h4 = '<h4> Bad word was detected! </h4>';
                    checker.innerHTML = h4;
                }
                if(result.isProfanity == false){
                    let h4 ='<h4> Now that was a normal word. </h4>';
                    checker.innerHTML = h4;
                }
            } else {
                console.error('Ошибка:', con.statusText);
            }
        }
    };

    con.onerror = function(){
        console.log(`Не могу соединиться с целевым сервером`);
    }
    con.send(JSON.stringify({ message: formData } ));
}
