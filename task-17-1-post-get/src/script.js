// POST

const postTag = document.getElementById("post-json");

const httpRequest = new XMLHttpRequest();

httpRequest.onload = () => {
  postTag.innerText = httpRequest.responseText;
  console.log(httpRequest.responseText);
};

httpRequest.open("POST", "http://apichallenges.herokuapp.com/todos");
httpRequest.setRequestHeader("Accept", "application/json");
httpRequest.setRequestHeader("Content-Type", "application/json");

const body = {
  description: "Test2",
  doneStatus: true,
  title: "Daurenbek",
};

httpRequest.send(JSON.stringify(body));

// GET

// const httpRequest = new XMLHttpRequest();

// httpRequest.onload = () => {
//   console.log(JSON.parse(httpRequest.responseText));
// };

// httpRequest.open("GET", "http://apichallenges.herokuapp.com/todos");

// httpRequest.send();
