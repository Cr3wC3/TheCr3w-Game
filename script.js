
const totalCards = 100; // Anzahl der Karten (z. B. 100)

function showRandomCard() {
    // Zufallszahl zwischen 1 und totalCards generieren
    const randomIndex = Math.floor(Math.random() * totalCards) + 1;

    // Dynamisch den Dateinamen erstellen (z. B. "img/5.png")
    const newCardSrc = `img/${randomIndex}.png`;

    // Das Bild im HTML aktualisieren
    document.getElementById("card-image").src = newCardSrc;
}
