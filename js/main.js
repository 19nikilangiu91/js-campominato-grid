// Consegna:
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Andiamo a creare una costante e colleghiamo il nostro "container-square".

const myContainerSquare = document.getElementById("container-square");

console.log(myContainerSquare);

// Andiamo a creare un ciclo "for" da 1 a 100.

for(let i = 1; i <= 100; i++){
    
    let newElement = createSquare();

    myContainerSquare.appendChild(newElement);
}

// Andiamo a creare la nostra "Funzione".

function createSquare() {

    // Andiamo a creare i nostri "div".

    const myElement = document.createElement("div");

    // Andiamo ad aggiungere la nostra classe ".square" ai "div".

    myElement.classList.add("square");
    console.log(myElement);

    // Ritorno.

    return myElement

}

