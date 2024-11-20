let drawnCards = []; // Liste der gezogenen Karten
let currentCard = null; // Die aktuelle Karte

// Gesamtzahl der Karten
const totalCards = 100; 

// Objekt mit den Lösungen für die Wissenskarten (21-40)
const solutions = {
    21: "img/Lösung-21.png",
    22: "img/Lösung-22.png",
    23: "img/Lösung-23.png",
    24: "img/Lösung-24.png",
    25: "img/Lösung-25.png",
    26: "img/Lösung-26.png",
    27: "img/Lösung-27.png",
    28: "img/Lösung-28.png",
    29: "img/Lösung-29.png",
    30: "img/Lösung-30.png",
    31: "img/Lösung-31.png",
    32: "img/Lösung-32.png",
    33: "img/Lösung-33.png",
    34: "img/Lösung-34.png",
    35: "img/Lösung-35.png",
    36: "img/Lösung-36.png",
    37: "img/Lösung-37.png",
    38: "img/Lösung-38.png",
    39: "img/Lösung-39.png",
    40: "img/Lösung-40.png"
};

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
    const solutionContainer = document.getElementById("solution-container");
    const solutionImageSrc = solutions[currentCard + 1]; // +1, da die Karte mit 1 anfängt, der Index aber mit 0

    if (solutionImageSrc) {
        // Lösungsbild anzeigen
        solutionContainer.innerHTML = `<img src="${solutionImageSrc}" alt="Lösung" class="solution-image">`;
    } else {
        alert("Keine Lösung für diese Karte verfügbar.");
    }

    // Der Button wird wieder auf "Ziehe eine Karte" gesetzt
    const button = document.getElementById("draw-button");
    button.textContent = "Ziehe eine Karte"; // Setzt den Button-Text zurück
    button.onclick = drawCard; // Button-Funktion wieder auf Karte ziehen zurücksetzen
}
