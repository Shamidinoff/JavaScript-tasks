const randomEmojiButton = document.querySelector("#random-emoji-button");
const randomEmojiResult = document.querySelector("#random-emoji-result");

randomEmojiButton.addEventListener("click", async () => {
  const response = await fetch("https://api.emojisworld.fr/v1/random");
  const data = await response.json();
  const emoji = data.emoji;

  randomEmojiResult.textContent = emoji;
  randomEmojiResult.style.fontSize = "70px";
});
