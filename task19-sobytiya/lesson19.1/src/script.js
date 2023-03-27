//  const btn = document.querySelector("#clickbtn");
 //const input = document.querySelector("#testInput")

// btn.onclick = () => {
//     alert("Hello");
// };

// 

// btn.addEventListener('click', () => {
//     console.log("Hello");
// });

// const input = document.querySelector("#testInput")

// testInput.addEventListener("keyup", () => {
//     console.log("Klavisha nazhata");
// });

// testInput.addEventListener("keydown", () => {
//     console.log("Klavisha nazhata");
// });

// CHANGE

// const input = document.querySelector("#testInput");

// testinput.addEventListener("change", function() {
//      alert("Vse rabotaet");
//  });

 //

//  const form = document.querySelector("#testForm");

//  form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formInput = event.target.children[0];
//     console.log(formInput.value);
//     console.log("Forma otpravlena");
// });

//

// testinput.addEventListener("change", (event) => {
//     const inputDescr = event.target;
//     console.log(inputDescr.value);
//  });

// CHANGE EVENT

//  testinput.addEventListener("keydown", (event) => {
//     const inputDescr = event.target;
//     console.log(inputDescr.value);
//  });

// EXAMPLE

//  testinput.addEventListener("keydown", (event) => {
//     console.log(event.key);
//     if(event.key === 'Enter'){
//         console.log("Dannye otpravleny");
//     }
//  });

// Example



//  const daurenBek = document.querySelector("#formDescr");
//  const username = "Olzhas";
//  const password = "olzhas19"
 

//  daurenBek.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formUserName = event.target.children[0];
//     const formPassword = event.target.children[1];
    
//     if(formUserName.value === username && formPassword.value === password){
//         console.log("Dannye otpravleny");
//     }
//     else {
//         console.log("Error");
//     }
//  });


//  event.preventDefault();
 //     const formInput = event.target.children[0];
 //     console.log(formInput.value);
 //     console.log("Forma otpravlena");

//  const container = document.querySelector(".container");
//  const btn = document.querySelector("#btn");

//     container.addEventListener("clock", () => {
//         console.log("Container nazhalsya");
//      }, true);

//     btn.addEventListener("clock", () => {
//         console.log("Knopka nazhalas");
//         event.stopPropagation();
//      }, true);

     //

     const container = document.querySelector(".container");
     const btnOff = document.querySelector("#btnOff");
     const btnOn = document.querySelector("#btnOn");
     let subcribe = false;

    

    container.addEventListener("click", () => {
        console.log("Container nazhalsya");
     }, true);

    btn.addEventListener("click", (event) => {
        if(subcribe === false){
            btnOff.style.display = "block";
            btnOn.style.display = "none";
            subcribe = true;
        }
        else if(subcribe === true){
            btnOff.style.display = "none";
            btnOn.style.display = "block";
            subcribe = true;
        }
        event.stopPropagation();
     }, true);

