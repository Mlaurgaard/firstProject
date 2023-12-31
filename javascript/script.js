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
    resetAllInputs();
}

span.onclick = function(){
    modal.style.display = "none";
    resetAllInputs();
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Send/Cancle button

let myAlert = document.getElementById("myAlert")

let typo = document.getElementById("typo")

let myClose = document.getElementById("myClose")[0]


// myAlert.onclick = function(){
//     alert ("Thank you! We will call you back shortly!")
// }

// myClose.onclick = function(){
    
// }

let loggedIn = false;
console.log("Am i Logged in???", loggedIn);

function logMeInPls(){
    loggedIn = true;
    console.log("Am i Logged in???", loggedIn);
}

// Traditional Function
function resetAllInputs(){
    document.getElementById('nameID').value = '';
    document.getElementById('emailID').value = '';
    document.getElementById('phoneID').value = '';
}

function alertMe(boxNumber){
    alert(boxNumber)
}

// Arrow Function
 submitMessageOnContactForm = (superSecretMessage) => {
    // alert ("Thank you! We will call you back shortly!")
    alert (superSecretMessage)
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

/* For Loop - 3 Statements
  - Statement 1: Define Where you wish to start in the loop
  - Statement 2: Define how long the loop should run
  - Statement 3: Define Behaviour of the loop.
    - Count upward ++   or downward --
*/
function getMyJaneArticles() {
    for(let index = 0; index < phonelist.length; index++){
        if(phonelist[index].name == 'Jane'){
            console.log("Halloo!!!", phonelist[index]);
            myJaneBook.push(phonelist[index])
        }
    }
    console.log("Janes Articles", myJaneBook);
}
/* forEach Loop

*/

getMyJaneArticles();


// console.log("Find Jane!", person)

function setTheme(){
    // Setting a Key  and give it a value
    localStorage.setItem("themeOfPage", "dark");
}
// setTheme();




// SWITCH CASE

let oct = 9;

switch (oct) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break; 
    case 3:
        month = "April";
        break; 
    case 4:
        month = "May";
        break; 
    case 5:
        month = "June";
        break; 
    case 6:
        month = "July";
        break; 
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break; 
    case 9:
        month = "October";
        break; 
    case 10:
        month = "November";
        break; 
    case 11:
        month = "Desember"; 
        break;
        default:
}

console.log("The month is " + month )

document.getElementById("Month").innerHTML = "The month is " + month;


// For LOOP 

const peopleList = [
    {
        firstName: "Anders",
        age: "27",
        email: "Anders123@gmail.com",
        description: "Tall, Caucasian, Wears glasses"
    },
    {
        firstName: "Bjørnar",
        age: "28",
        email: "Bjørnis321@gmail.com",
        description: "Short, Caucasian, Likes to wear black"
    },
    {
        firstName: "Carol",
        age: "32",
        email: "Carry987@gmail.com",
        description: "Avg Height, African, Likes disco"
    },
    {
        firstName: "Diane",
        age: "30",
        email: "Dia789@gmail.com",
        description: "Avg Height, Asian, Has many cats"
    },
]

let phoneBook = [];

function addOnlyNames(){
    for(let index = 0; index < peopleList.length; index++){
        console.log(peopleList[index].firstName);
    }
}



// function getMyJaneArticles() {
//     for(let index = 0; index < phonelist.length; index++){
//         if(phonelist[index].name == 'Jane'){
//             console.log("Halloo!!!", phonelist[index]);
//             myJaneBook.push(phonelist[index])
//         }
//     }
//     console.log("Janes Articles", myJaneBook);
// }