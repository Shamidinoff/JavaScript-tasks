const emojisContainer = document.querySelector("#emojis");

(async () => {
  const response = await fetch("GET https://api.emojisworld.fr/v1/categories");
  const data = await response.json();
  const emojis = data.emojis;

  const categories = new Set(emojis.map((emoji) => emoji.category));

  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `<h2>${category}</h2>`;
    emojisContainer.appendChild(categoryDiv);

    const categoryEmojis = emojis.filter(
      (emoji) => emoji.category === category
    );

    categoryEmojis.forEach((emoji) => {
      const emojiSpan = document.createElement("span");
      emojiSpan.textContent = emoji.emoji;
      categoryDiv.appendChild(emojiSpan);
    });
  });
})();
