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
    // Hier gibst du die Lösung für die Karte aus (nur Beispiel, anpassen)
    const solution = getSolutionForCard(currentCard); // Hole die Lösung der aktuellen Karte

    // Zeige die Lösung an (als einfache Alert-Nachricht hier)
    alert(solution);

    // Der Button wird wieder auf "Ziehe eine Karte" gesetzt
    const button = document.getElementById("draw-button");
    button.textContent = "Ziehe eine Karte"; // Setzt den Button-Text zurück
    button.onclick = drawCard; // Button-Funktion wieder auf Karte ziehen zurücksetzen
}

// Funktion, die die Lösung für eine Karte zurückgibt
function getSolutionForCard(cardIndex) {
    // Hier ist nur ein einfaches Beispiel für Lösungen
    const solutions = {
        21: "img/_Lösung-21.png",
        22: "img/_Lösung-22.png",
        23: "img/_Lösung-23.png",
        24: "img/_Lösung-24.png",
        // Hier können alle Lösungen für Karten 21-40 hinzugefügt werden
    };

    // Gebe die Lösung zurück, die dem Index entspricht
    return solutions[cardIndex] || "Keine Lösung für diese Karte verfügbar.";
}

