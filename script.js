let drawnCards = []; // Liste der gezogenen Karten
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
    // Hier gibst du die Lösung für die Karte aus
    const solutionImageSrc = getSolutionForCard(currentCard); // Hole die Lösung der aktuellen Karte

    // Erstelle das Bild-Element
    const solutionImage = document.createElement("img");
    solutionImage.src = solutionImageSrc; // Setze die Quelle des Bildes
    solutionImage.alt = "Lösung der Karte"; // Alternativtext für das Bild

    // Optionale CSS-Klasse hinzufügen, wenn du das Bild stylen möchtest
    solutionImage.classList.add("solution-image");

    // Lösung im HTML anzeigen (im Container mit der ID 'solution-container')
    const solutionContainer = document.getElementById("solution-container");
    solutionContainer.innerHTML = ""; // Vorherige Lösung entfernen (falls vorhanden)
    solutionContainer.appendChild(solutionImage); // Das neue Bild hinzufügen

    // Button zurücksetzen: Ändere den Button-Text und die Funktion zurück zum Ziehen einer Karte
    const button = document.getElementById("draw-button");
    button.textContent = "Ziehe eine Karte"; // Setzt den Button-Text zurück
    button.onclick = drawCard; // Setzt die Funktion zurück auf "Ziehe eine Karte"
}


// Funktion, die die Lösung für eine Karte zurückgibt
function getSolutionForCard(cardIndex) {
    // Hier ist nur ein einfaches Beispiel für Lösungen
    const solution = {  // Korrektur des Variablennamens (solutions statt soulution)
        21: "img/Lösung-21.png", // Lösung für Karte 21
        22: "img/Lösung-22.png", // Lösung für Karte 22
        23: "img/Lösung-23.png", // Lösung für Karte 23
        24: "img/Lösung-24.png", // Lösung für Karte 24
        25: "img/Lösung-25.png", // Lösung für Karte 25
        26: "img/Lösung-26.png", // Lösung für Karte 26
        27: "img/Lösung-27.png", // Lösung für Karte 27
        28: "img/Lösung-28.png", // Lösung für Karte 28
        29: "img/Lösung-29.png", // Lösung für Karte 29
        30: "img/Lösung-30.png", // Lösung für Karte 30
        31: "img/Lösung-31.png", // Lösung für Karte 31
        32: "img/Lösung-32.png", // Lösung für Karte 32
        33: "img/Lösung-33.png", // Lösung für Karte 33
        34: "img/Lösung-34.png", // Lösung für Karte 34
        35: "img/Lösung-35.png", // Lösung für Karte 35
        36: "img/Lösung-36.png", // Lösung für Karte 36
        37: "img/Lösung-37.png", // Lösung für Karte 37
        38: "img/Lösung-38.png", // Lösung für Karte 38
        39: "img/Lösung-39.png", // Lösung für Karte 39
        40: "img/Lösung-40.png", // Lösung für Karte 40
    };
    // Gebe die Lösung zurück, die dem Index entspricht
    return solutions[cardIndex] || "img/default_solution.png"; // Standardbild, wenn keine Lösung vorhanden ist
}
