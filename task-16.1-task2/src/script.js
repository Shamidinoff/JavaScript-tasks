const titleDiv = document.getElementById("title");
let httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  const data = JSON.parse(httpRequest.responseText);
  console.log(data);
  const ul = document.createElement("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.title;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
};

httpRequest.open("get", "https://jsonplaceholder.typicode.com/todos");
httpRequest.send();
