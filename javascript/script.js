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

// Send/Cancle button

let myAlert = document.getElementById("myAlert")

myAlert.onclick = function(){
    alert ("Thank you! We will call you back shortly!")
}

window.onclick = function(event){
    if (event.target == myAlert){
        myAlert.style.display = "";
    }
}







const phonelist = [
    {
        name: "Bob",
        description: "Is Bob"
    },
    {
        name: "Jane",
        description: "How to pretend being a Bob"
    },
    {
        name: "Frank",
        description: "Was also a bob"
    },
    {
        name: "Jane",
        description: "Article numero two"
    },
    {
        name: "Jane",
        description: "yes"
    },
]

let person = phonelist;

let myJaneBook = [];

function getMyJaneArticles() {
    /* For Loop - 3 Statements
      - Statement 1: sets a variable before the loop starts
      - Statement 2: defines the condition for the loop to run
      - Statement 3:  increases a value (index++) each time the code block in the loop has been executed
    */
    for(let index = 0; index < phonelist.length; index++){
        if(phonelist[index].name == 'Jane'){
            console.log("Halloo!!!", phonelist[index]);
            myJaneBook.push(phonelist[index])
        }
    }
    console.log("Janes Articles", myJaneBook);
}

getMyJaneArticles();


// console.log("Find Jane!", person)

function setTheme(){
    // Setting a Key  and give it a value
    localStorage.setItem("themeOfPage", "dark");
}
// setTheme();