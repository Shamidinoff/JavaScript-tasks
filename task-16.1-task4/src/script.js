const cityAndTime = document.querySelector(".city-time");
const iconContent = document.querySelector(".iconWeather");
const tempCont = document.querySelector(".temp");
const current = document.querySelector(".current");
const foreCast = document.querySelector(".forecast");
const fcContent = document.querySelector(".fc-content");

const speedContent = document.querySelector(".speed-content");
let httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  const data = JSON.parse(httpRequest.responseText);
  console.log(data);

  // Получение название города
  const cityTag = createTag("p", data.city.name, "current-city");
  cityAndTime.appendChild(cityTag);

  // Получение текущего времени Минска
  let time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Minsk",
  });
  time = time.substring(0, 5);
  const timeTag = createTag("p", time, "current-time");
  cityAndTime.appendChild(timeTag);

  // Получение иконки погоды
  const iconCode = data.list[0].weather[0].icon;
  const iconImg = document.createElement("img");
  iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  iconContent.appendChild(iconImg);

  // Название погоды
  const weatherName = data.list[0].weather[0].main;
  const weatherTag = createTag("p", weatherName, "current-weather");
  tempCont.appendChild(weatherTag);

  // Градус погоды
  let temperature = data.list[0].main.temp;
  temperature = Math.floor(temperature);
  const temperatureTag = createTag(
    "p",
    `${temperature} °C`,
    "current-temperature"
  );
  tempCont.appendChild(temperatureTag);

  // Получение название (ветра)
  const speedKey = Object.keys(data.list[0].wind).find(
    (key) => data.list[0].wind[key] === data.list[0].wind.speed
  );
  const speedNameTag = createTag("p", speedKey, "current-speed-name");
  speedContent.appendChild(speedNameTag);

  // Получение скорости ветра
  const speed = data.list[0].wind.speed;
  const speedTag = createTag("p", `${speed} m/s`, "current-speed");
  speedContent.appendChild(speedTag);

  // ForeCast - Bottom content - FORECAST ******************

  const futureWeather = [];
  for (let i = 7; i < data.list.length; i += 8) {
    futureWeather.push(data.list[i]);
  }

  futureWeather.forEach((weather) => {
    // Date and Time
    const dateAndTime = weather.dt_txt.split(" ");
    const date = dateAndTime[0];
    const time = dateAndTime[1];

    const dateTag = createTag("p", date, "forecast-date");
    const timeTag = createTag("p", time, "forecast-time");

    // fcContent.appendChild(dateTag);
    // fcContent.appendChild(timeTag);

    const li = document.createElement("li");
    const dateAndTimeTag = document.createElement("div");
    dateAndTimeTag.appendChild(dateTag);
    dateAndTimeTag.appendChild(timeTag);
    li.appendChild(dateAndTimeTag);
    fcContent.appendChild(li);

    // Icon weather

    const iconWeather = weather.weather[0].icon;
    console.log(iconWeather);

    const iconImg = document.createElement("img");
    iconImg.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`;
    // fcContent.appendChild(iconImg);

    const liImg = document.createElement("li");
    li.appendChild(iconImg);
    fcContent.appendChild(li);

    // Temperature

    let temperature = weather.main.temp;
    temperature = Math.floor(temperature);

    const temperatureTag = createTag(
      "p",
      `${temperature} °C`,
      "current-temperature"
    );
    // fcContent.appendChild(temperatureTag);

    const liTemp = document.createElement("li");
    li.appendChild(temperatureTag);
    fcContent.appendChild(li);
  });
};

function createTag(tag, text, className) {
  const customTag = document.createElement(tag);
  customTag.innerText = text;
  customTag.className = className;

  return customTag;
}

// Надо добавить в конец ссылки слово &units=metric чтобы температура отображалось в градусах
httpRequest.open(
  "get",
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric"
);
httpRequest.send();
