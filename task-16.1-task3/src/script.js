const resultDiv = document.querySelector(".result");
let httpRequest = new XMLHttpRequest();

function addInfo(tag, innerText, className) {
  const customTag = document.createElement(tag);
  customTag.innerText = innerText;
  customTag.classList.add(className);
  resultDiv.appendChild(customTag);
}

httpRequest.onload = function () {
  const data = JSON.parse(httpRequest.responseText);

  data.forEach((comment) => {
    const dataName = comment.name;
    const dataEmail = comment.email;
    const dataBody = comment.body;

    // console.log(name + "; " + email + "; " + body);
    addInfo("h3", dataName, "name");
    addInfo("p", dataEmail, "email");
    addInfo("p", dataBody, "body");
  });
};

httpRequest.open("get", "https://jsonplaceholder.typicode.com/comments");
httpRequest.send();
