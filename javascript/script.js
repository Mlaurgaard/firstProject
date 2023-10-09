/* Variabel
- Er var, let og const
- Var = Ikke bruk
- Let kan definere variabel og skifte verdier
- Const definer variabel men verdien er satt fast
*/

/*let isLoggedIn = false;
isLoggedIn = true;


console.log("Am i logged in?", isLoggedIn);
*/

function Contact() {
    alert ("Contact page!");
}

/*Get Modal*/
let modal = document.getElementById("myModal");

/* Modal Button */
let button = document.getElementById("myBtn")

let span = document.getElementsByClassName("close")[0];

button.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}