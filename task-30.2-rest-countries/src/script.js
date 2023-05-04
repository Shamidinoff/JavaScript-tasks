const countriesContainer = document.querySelector("#countries");

(async () => {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();
  const countries = data.filter((country, index) => index % 10 === 0); // Получаем каждую 10-ю страну

  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("col");
    countryCard.innerHTML = `
      <div class="card">
        <img src="${country.flag}" class="card-img-top" alt="${country.name}">
        <div class="card-body">
          <h5 class="card-title">${country.name}</h5>
          <p class="card-text">Код страны: ${country.alpha2Code}</p>
        </div>
      </div>
    `;
    countriesContainer.appendChild(countryCard);
  });
})();
