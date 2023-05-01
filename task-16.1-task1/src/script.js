const titleDiv = document.getElementById("title");
let httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  const data = JSON.parse(httpRequest.responseText);
  titleDiv.innerText = data.title;
};

httpRequest.open("get", "https://jsonplaceholder.typicode.com/todos/1");
httpRequest.send();
