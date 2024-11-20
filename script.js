const totalCards = 100; // Anzahl der Karten (z. B. 100)
let drawnCards = []; // Liste der bereits gezogenen Karten

// Array mit den Karten und ihren Lösungen
const cardsWithSolutions = [
    { cardImage: "img/1.png", solution: "Lösung für Karte 1" },
    { cardImage: "img/2.png", solution: "Lösung für Karte 2" },
    { cardImage: "img/3.png", solution: "Lösung für Karte 3" },
    // ... bis zur letzten Karte
    { cardImage: "img/100.png", solution: "Lösung für Karte 100" }
];

let currentCard = null; // Variable für die aktuelle gezogene Karte

// Funktion zum Ziehen einer Karte
function showRandomCard() {
    // Prüfen, ob alle Karten gezogen wurden
    if (drawnCards.length === totalCards) {
        alert("Alle Karten wurden gezogen!");
        return;
    }

    let randomIndex;

    // Zufallszahl generieren, die noch nicht gezogen wurde
    do {
        randomIndex = Math.floor(Math.random() * totalCards);
    } while (drawnCards.includes(randomIndex));

    // Karte zur Liste der gezogenen Karten hinzufügen
    drawnCards.push(randomIndex);

    // Die gezogene Karte und ihre Lösung
    currentCard = cardsWithSolutions[randomIndex];

    // Dynamisch das Kartenbild anzeigen
    document.getElementById("card-image").src = currentCard.cardImage;

    // Button-Text auf "Lösung anzeigen" ändern
    document.getElementById("action-button").textContent = "Lösung anzeigen";
}

// Funktion zum Anzeigen der Lösung
function showSolution() {
    // Wenn eine Karte gezogen wurde, zeige die Lösung an
    if (currentCard) {
        alert(currentCard.solution); // Du kannst es auch anders anzeigen, z.B. in einem Bereich auf der Seite
    }
}
