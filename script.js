// Liste der gezogenen Karten
let drawnCards = []; 
let currentCard = null; // Die aktuelle Karte

// Gesamtzahl der Karten
const totalCards = 100; 

// Funktion zum Ziehen einer zufälligen Karte
function drawCard() {
    // Überprüfen, ob alle Karten gezogen wurden
    if (drawnCards.length === totalCards) {
        alert("Alle Karten wurden gezogen!");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalCards); // Zufällige Karte zwischen 0 und totalCards-1
    } while (drawnCards.includes(randomIndex)); // Prüfen, ob diese Karte bereits gezogen wurde

    // Karte zur Liste der gezogenen Karten hinzufügen
    drawnCards.push(randomIndex);
    
    // Die gezogene Karte speichern
    currentCard = randomIndex;

    // Dynamisch den Dateinamen der Karte erstellen (z. B. "img/1.png")
    const newCardSrc = `img/${randomIndex + 1}.png`;
    
    // Das Bild im HTML aktualisieren
    document.getElementById("card-image").src = newCardSrc;
    
    // Den Button zurücksetzen und den Text auf "Ziehe eine Karte" setzen
    const button = document.getElementById("draw-button");
    button.textContent = "Ziehe eine Karte"; // Setzt den Text auf "Ziehe eine Karte"
    button.onclick = drawCard; // Setzt die Funktion wieder auf Karte ziehen

    // Wenn es eine Wissenskarte ist (Karten 21-40), Button anpassen
    if (randomIndex >= 20 && randomIndex < 40) {
        button.textContent = "Lösung anzeigen"; // Button-Text ändern zu "Lösung anzeigen"
        button.onclick = showSolution; // Button-Funktion ändern auf showSolution
    }
}

// Funktion zum Anzeigen der Lösung
function showSolution() {
    if (currentCard >= 20 && currentCard < 40) { // Sicherstellen, dass es eine Wissenskarte ist
        // Hole den Pfad zur Lösungskarte
        const solutionSrc = getSolutionForCard(currentCard);

        // Das Bild im HTML mit der Lösungskarte ersetzen
        document.getElementById("card-image").src = solutionSrc;

        // Den Button wieder auf "Ziehe eine Karte" setzen
        const button = document.getElementById("draw-button");
        button.textContent = "Ziehe eine Karte"; // Setzt den Button-Text zurück
        button.onclick = drawCard; // Button-Funktion wieder auf Karte ziehen zurücksetzen
    } else {
        console.error("Es gibt keine Lösung für diese Karte.");
    }
}

// Funktion, die die Lösung für eine Karte zurückgibt
function getSolutionForCard(cardIndex) {
    // Hier ist die Zuordnung der Karten 21-40 zu ihren Lösungskarten
    const solutions = {
        20: "img/L-21.png",
        21: "img/L-22.png",
        22: "img/L-23.png",
        23: "img/L-24.png",
        24: "img/L-25.png",
        25: "img/L-26.png",
        26: "img/L-27.png",
        27: "img/L-28.png",
        28: "img/L-29.png",
        29: "img/L-30.png",
        30: "img/L-31.png",
        31: "img/L-32.png",
        32: "img/L-33.png",
        33: "img/L-34.png",
        34: "img/L-35.png",
        35: "img/L-36.png",
        36: "img/L-37.png",
        37: "img/L-38.png",
        38: "img/L-39.png",
        39: "img/L-40.png"
    };

    // Gebe den Pfad zur Lösung zurück, wenn vorhanden
    return solutions[cardIndex] || "img/default-solution.png"; // Standardbild, falls keine Lösung existiert
}
