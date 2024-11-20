const totalCards = 100; // Gesamtzahl der Karten
let drawnCards = []; // Liste der gezogenen Karten

// Array mit Karteninformationen und Lösungen (WISSEN-Karten sind 21 bis 40)
const cardsWithSolutions = [
    { cardImage: "img/1.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/2.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/3.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/4.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/5.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/6.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/7.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/8.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/9.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/10.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/11.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/12.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/13.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/14.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/15.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/16.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/17.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/18.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/19.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/20.png", solution: null, type: "KEIN WISSEN" },
    { cardImage: "img/21.png", solution: "img/Lösung-21.png", type: "WISSEN" },
    { cardImage: "img/22.png", solution: "img/Lösung-22.png", type: "WISSEN" },
    { cardImage: "img/23.png", solution: "img/Lösung-23.png", type: "WISSEN" },
    { cardImage: "img/24.png", solution: "img/Lösung-24.png", type: "WISSEN" },
    { cardImage: "img/25.png", solution: "img/Lösung-25.png", type: "WISSEN" },
    { cardImage: "img/26.png", solution: "img/Lösung-26.png", type: "WISSEN" },
    { cardImage: "img/27.png", solution: "img/Lösung-27.png", type: "WISSEN" },
    { cardImage: "img/28.png", solution: "img/Lösung-28.png", type: "WISSEN" },
    { cardImage: "img/29.png", solution: "img/Lösung-29.png", type: "WISSEN" },
    { cardImage: "img/30.png", solution: "img/Lösung-30.png", type: "WISSEN" },
    { cardImage: "img/31.png", solution: "img/Lösung-31.png", type: "WISSEN" },
    { cardImage: "img/32.png", solution: "img/Lösung-32.png", type: "WISSEN" },
    { cardImage: "img/33.png", solution: "img/Lösung-33.png", type: "WISSEN" },
    { cardImage: "img/34.png", solution: "img/Lösung-34.png", type: "WISSEN" },
    { cardImage: "img/35.png", solution: "img/Lösung-35.png", type: "WISSEN" },
    { cardImage: "img/36.png", solution: "img/Lösung-36.png", type: "WISSEN" },
    { cardImage: "img/37.png", solution: "img/Lösung-37.png", type: "WISSEN" },
    { cardImage: "img/38.png", solution: "img/Lösung-38.png", type: "WISSEN" },
    { cardImage: "img/39.png", solution: "img/Lösung-39.png", type: "WISSEN" },
    { cardImage: "img/40.png", solution: "img/Lösung-40.png", type: "WISSEN" }
];

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

    // Karte anzeigen
    const card = cardsWithSolutions[randomIndex];
    document.getElementById("cardImage").src = card.cardImage;
    document.getElementById("cardType").textContent = card.type;

    // Wenn es eine "WISSEN"-Karte ist, Lösung anzeigen Button aktivieren
    const solutionButton = document.getElementById("solutionButton");
    if (card.type === "WISSEN") {
        solutionButton.style.display = "inline-block"; // Button anzeigen
        solutionButton.onclick = function() {
            const solutionImage = card.solution;
            document.getElementById("cardImage").src = solutionImage; // Lösung anzeigen
        };
    } else {
        solutionButton.style.display = "none"; // Button ausblenden, wenn keine "WISSEN"-Karte
    }
}

// Event Listener für "Ziehe eine Karte"-Button
document.getElementById("drawCardButton").addEventListener("click", drawCard);
