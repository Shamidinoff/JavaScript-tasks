// Получаем данные об одной стране
fetch("https://restcountries.com/v3.1/name/spain")
  .then((response) => response.json())
  .then((data) => {
    const country = data[0]; // Получаем объект страны
    // Отрисовываем карточку страны
    const countryCard = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${country.flags.svg}" alt="${
      country.name.common
    }" class="img-fluid">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <p class="card-text"><strong>Столица:</strong> ${
                country.capital
              }</p>
              <p class="card-text"><strong>Регион:</strong> ${
                country.region
              }</p>
              <p class="card-text"><strong>Население:</strong> ${
                country.population
              }</p>
              <p class="card-text"><strong>Площадь:</strong> ${
                country.area
              } км²</p>
              <p class="card-text"><strong>Языки:</strong> ${Object.values(
                country.languages
              ).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("country").innerHTML = countryCard;

    // Получаем данные о соседних странах
    const neighborCodes = country.borders; // Получаем массив кодов соседних стран
    const neighborPromises = neighborCodes.map((code) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
        (response) => response.json()
      );
    });
    Promise.all(neighborPromises).then((neighborCountries) => {
      // Отрисовываем карточки соседних стран
      const neighborsTitle = `<h2 class="mt-5">Соседние страны</h2>`;
      const neighborsCards = neighborCountries
        .map(
          (neighborCountry) => `
        <div class="card col-md-3 mb-3">
          <img src="${neighborCountry.flags.svg}" alt="${neighborCountry.name.common}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${neighborCountry.name.common}</h5>
            <p class="card-text"><strong>Столица:</strong> ${neighborCountry.capital}</p>
          </div>
        </div>
      `
        )
        .join("");
      document.getElementById("neighbors").innerHTML =
        neighborsTitle + `<div class="row">${neighborsCards}</div>`;
    });
  });
