// PUT

const button = document.getElementById("update");

button.addEventListener("click", () => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onload = () => {
    console.log(httpRequest.responseText);
  };

  httpRequest.open("PUT", "http://apichallenges.herokuapp.com/todos/461");
  httpRequest.setRequestHeader("Accept", "application/json");
  httpRequest.setRequestHeader("Content-Type", "application/json");

  const currentDate = new Date().toLocaleTimeString("en-GB");
  const currentTime = currentDate.slice(0, 5);

  const body = {
    // description: "Test2",
    // doneStatus: true,
    title: currentTime,
  };

  httpRequest.send(JSON.stringify(body));
});

// GET

// const httpRequest = new XMLHttpRequest();

// httpRequest.onload = () => {
//   console.log(JSON.parse(httpRequest.responseText));
// };

// httpRequest.open("GET", "http://apichallenges.herokuapp.com/todos");

// httpRequest.send();
