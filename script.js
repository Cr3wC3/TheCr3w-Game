const totalCards = 100; // Anzahl der Karten (z. B. 100)
let drawnCards = []; // Liste der bereits gezogenen Karten

function showRandomCard() {
    // Prüfen, ob alle Karten gezogen wurden
    if (drawnCards.length === totalCards) {
        alert("Alle Karten wurden gezogen!");
        return;
    }

    let randomIndex;

    // Zufallszahl generieren, die noch nicht gezogen wurde
    do {
        randomIndex = Math.floor(Math.random() * totalCards) + 1;
    } while (drawnCards.includes(randomIndex));

    // Karte zur Liste der gezogenen Karten hinzufügen
    drawnCards.push(randomIndex);

    // Dynamisch den Dateinamen erstellen (z. B. "img/5.png")
    const newCardSrc = `img/${randomIndex}.png`;

    // Das Bild im HTML aktualisieren
    document.getElementById("card-image").src = newCardSrc;
}
