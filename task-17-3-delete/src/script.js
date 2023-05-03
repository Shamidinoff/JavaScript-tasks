// PUT

const button = document.getElementById("delete");

button.addEventListener("click", () => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onload = () => {
    console.log(httpRequest.status + ": удалено успешно");
  };

  httpRequest.open("DELETE", "http://apichallenges.herokuapp.com/todos/474");
  httpRequest.setRequestHeader("Accept", "application/json");
  httpRequest.setRequestHeader("Content-Type", "application/json");

  httpRequest.send();

  button.innerText = "Удалено";
  button.disabled = true;
});

// GET

// const httpRequest = new XMLHttpRequest();

// httpRequest.onload = () => {
//   console.log(JSON.parse(httpRequest.responseText));
// };

// httpRequest.open("GET", "http://apichallenges.herokuapp.com/todos");

// httpRequest.send();
