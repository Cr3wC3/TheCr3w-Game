const totalCards = 100; // Anzahl der Karten (z. B. 100)
let drawnCards = []; // Liste der bereits gezogenen Karten

// Array mit den Karten und ihren Lösungen
const cardsWithSolutions = [
    // Beispiel für Karten von 1 bis 20 (keine Lösungen im Beispiel)
    { cardImage: "img/1.png", solution: null },
    { cardImage: "img/2.png", solution: null },
    { cardImage: "img/3.png", solution: null },
    { cardImage: "img/4.png", solution: null },
     { cardImage: "img/5.png", solution: null },
     { cardImage: "img/6.png", solution: null },
     { cardImage: "img/7.png", solution: null },
     { cardImage: "img/8.png", solution: null },
     { cardImage: "img/9.png", solution: null },
     { cardImage: "img/10.png", solution: null },
     { cardImage: "img/11.png", solution: null },
     { cardImage: "img/12.png", solution: null },
     { cardImage: "img/13.png", solution: null },
     { cardImage: "img/14.png", solution: null },
     { cardImage: "img/15.png", solution: null },
     { cardImage: "img/16.png", solution: null },
     { cardImage: "img/17.png", solution: null },
     { cardImage: "img/18.png", solution: null },
     { cardImage: "img/19.png", solution: null },
    { cardImage: "img/20.png", solution: null },
    
    // Karten 21 bis 40 (mit Lösungen)
    { cardImage: "img/21.png", solution: "img/Lösung-21.png" },
    { cardImage: "img/22.png", solution: "img/Lösung-22.png" },
    { cardImage: "img/23.png", solution: "img/Lösung-23.png" },
    { cardImage: "img/24.png", solution: "img/Lösung-24.png" },
    { cardImage: "img/25.png", solution: "img/Lösung-25.png" },
    { cardImage: "img/26.png", solution: "img/Lösung-26.png" },
    { cardImage: "img/27.png", solution: "img/Lösung-27.png" },
    { cardImage: "img/28.png", solution: "img/Lösung-28.png" },
    { cardImage: "img/29.png", solution: "img/Lösung-29.png" },
    { cardImage: "img/30.png", solution: "img/Lösung-30.png" },
    { cardImage: "img/31.png", solution: "img/Lösung-31.png" },
    { cardImage: "img/32.png", solution: "img/Lösung-32.png" },
    { cardImage: "img/33.png", solution: "img/Lösung-33.png" },
    { cardImage: "img/34.png", solution: "img/Lösung-34.png" },
    { cardImage: "img/35.png", solution: "img/Lösung-35.png" },
    { cardImage: "img/36.png", solution: "img/Lösung-36.png" },
    { cardImage: "img/37.png", solution: "img/Lösung-37.png" },
    { cardImage: "img/38.png", solution: "img/Lösung-38.png" },
    { cardImage: "img/39.png", solution: "img/Lösung-39.png" },
    { cardImage: "img/40.png", solution: "img/Lösung-40.png" },
    


    
    // Karten 41 bis 100 haben keine Lösungen
    { cardImage: "img/41.png", solution: null },
    { cardImage: "img/42.png", solution: null },
    { cardImage: "img/43.png", solution: null },
    { cardImage: "img/44.png", solution: null },
    { cardImage: "img/45.png", solution: null },
    { cardImage: "img/46.png", solution: null },
    { cardImage: "img/47.png", solution: null },
    { cardImage: "img/48.png", solution: null },
    { cardImage: "img/49.png", solution: null },
    { cardImage: "img/50.png", solution: null },
    { cardImage: "img/51.png", solution: null },
    { cardImage: "img/52.png", solution: null },
    { cardImage: "img/53.png", solution: null },
    { cardImage: "img/54.png", solution: null },
    { cardImage: "img/55.png", solution: null },
    { cardImage: "img/56.png", solution: null },
    { cardImage: "img/57.png", solution: null },
    { cardImage: "img/58.png", solution: null },
    { cardImage: "img/59.png", solution: null },
    { cardImage: "img/60.png", solution: null },
    { cardImage: "img/61.png", solution: null },
    { cardImage: "img/62.png", solution: null },
    { cardImage: "img/63.png", solution: null },
    { cardImage: "img/64.png", solution: null },
    { cardImage: "img/65.png", solution: null },
    { cardImage: "img/66.png", solution: null },
    { cardImage: "img/67.png", solution: null },
    { cardImage: "img/68.png", solution: null },
    { cardImage: "img/69.png", solution: null },
    { cardImage: "img/70.png", solution: null },
    { cardImage: "img/71.png", solution: null },
    { cardImage: "img/72.png", solution: null },
    { cardImage: "img/73.png", solution: null },
    { cardImage: "img/74.png", solution: null },
    { cardImage: "img/75.png", solution: null },
    { cardImage: "img/76.png", solution: null },
    { cardImage: "img/77.png", solution: null },
    { cardImage: "img/78.png", solution: null },
    { cardImage: "img/79.png", solution: null },
    { cardImage: "img/80.png", solution: null },
    { cardImage: "img/81.png", solution: null },
    { cardImage: "img/82.png", solution: null },
    { cardImage: "img/83.png", solution: null },
    { cardImage: "img/84.png", solution: null },
    { cardImage: "img/85.png", solution: null },
    { cardImage: "img/86.png", solution: null },
    { cardImage: "img/87.png", solution: null },
    { cardImage: "img/88.png", solution: null },
    { cardImage: "img/89.png", solution: null },
    { cardImage: "img/90.png", solution: null },
    { cardImage: "img/91.png", solution: null },
    { cardImage: "img/92.png", solution: null },
    { cardImage: "img/93.png", solution: null },
    { cardImage: "img/94.png", solution: null },
    { cardImage: "img/95.png", solution: null },
    { cardImage: "img/96.png", solution: null },
    { cardImage: "img/97.png", solution: null },
    { cardImage: "img/98.png", solution: null },
    { cardImage: "img/99.png", solution: null },
    { cardImage: "img/100.png", solution: null }
];

// Variable für die aktuelle gezogene Karte
let currentCard = null;

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
    if (currentCard && currentCard.solution) {
        // Wenn es eine Lösung gibt, zeige sie an
        document.getElementById("solution-image").src = currentCard.solution;
        document.getElementById("solution-container").style.display = "block";
    } else {
        alert("Für diese Karte gibt es keine Lösung.");
    }
}
