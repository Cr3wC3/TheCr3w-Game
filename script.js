var cardImages = [
  "img/card1.png",
  "img/card2.png",
  "img/card3.png",
  "img/card4.png",
  "img/card5.png"

  // Füge hier weitere Bilder hinzu
];

function showRandomCard() {
  var randomIndex = Math.floor(Math.random() * card-image.length);
  document.getElementById("card-image").src = card-image[randomIndex];
}
