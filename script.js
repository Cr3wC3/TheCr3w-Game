const totalCards = 1000; // Anzahl der Karten

function showRandomCard() {
    // Zufallszahl zwischen 1 und totalCards generieren
    const randomIndex = Math.floor(Math.random() * totalCards) + 1;

    // Dynamisch den Dateinamen erstellen, z. B. "img/card123.png"
    const newCardSrc = `img/card${randomIndex}.png`;

    // Das Bild in der HTML-Seite aktualisieren
    document.getElementById("card-image").src = newCardSrc;
}
