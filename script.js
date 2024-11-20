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

// Funktion zum Anzeigen der Lösung für eine Wissenskarte
function showSolution() {
    // Hier holst du das Bild für die Lösung der aktuellen Karte
    const solutionImageSrc = getSolutionImageForCard(currentCard); // Holen der Bildquelle für die Lösung

    // Bild-Element erstellen und anzeigen
    const solutionImage = document.createElement("img");
    solutionImage.src = solutionImageSrc;
    solutionImage.alt = "Lösung der Karte";
    solutionImage.classList.add("solution-image"); // Optional: Klasse für Styling

    // Das Bild im HTML anzeigen (z.B. in einem bestimmten Div)
    const solutionContainer = document.getElementById("solution-container");
    solutionContainer.innerHTML = ""; // Vorherige Lösung entfernen
    solutionContainer.appendChild(solutionImage);

    // Den Button wieder auf "Ziehe eine Karte" zurücksetzen
    const button = document.getElementById("draw-button");
    button.textContent = "Ziehe eine Karte"; // Setzt den Button-Text auf "Ziehe eine Karte"
    button.onclick = drawCard; // Stellt die Funktion des Buttons zurück auf "Ziehe eine Karte"
}

// Funktion zum Abrufen des Bildes der Lösung für eine Karte
function getSolutionImageForCard(cardIndex) {
    // Beispiel-Bilder für Karten 21-40 (kannst du nach Bedarf anpassen)
    const solutionImages = {
        21: "img/Lösung-21.png", // Bild für Karte 21
        22: "img/Lösung-22.png", // Bild für Karte 22
        23: "img/Lösung-23.png", // Bild für Karte 23
        24: "img/Lösung-24.png", // Bild für Karte 24
        // Füge hier die weiteren Bildpfade für Karten 21-40 hinzu
    };

    // Gib das Bild der Karte zurück (oder einen Standard-Bildpfad, wenn keine Lösung vorhanden ist)
    return solutionImages[cardIndex] || "img/default_solution.png"; // Standardbild, wenn keine Lösung vorhanden ist
}
