const totalCards = 100; // Gesamtzahl der Karten (z. B. 100)
let drawnCards = []; // Liste der gezogenen Karten

// Funktion zum Ziehen einer zufälligen Karte
function drawCard() {
    // Überprüfen, ob alle Karten gezogen wurden
    if (drawnCards.length === totalCards) {
        alert("Alle Karten wurden gezogen!");
        return;
    }

    // Zufällige Karte ziehen
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalCards);
    } while (drawnCards.includes(randomIndex));

    // Karte zur Liste der gezogenen Karten hinzufügen
    drawnCards.push(randomIndex);

    // Dynamisch den Dateinamen der Karte erstellen (z. B. "img/1.png")
    const newCardSrc = `img/${randomIndex + 1}.png`;

    // Das Bild im HTML aktualisieren
    document.getElementById("card-image").src = newCardSrc;
}

// Event Listener für den Button zum Ziehen einer Karte
document.getElementById("drawCardButton").addEventListener("click", drawCard);
