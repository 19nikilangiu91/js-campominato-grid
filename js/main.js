// 1) Consegna:
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Andiamo a creare una costante e colleghiamo il nostro "container-square".

const myContainerSquare = document.getElementById("container-square");

console.log(myContainerSquare);

// Andiamo a creare una variabile per collegare il nostro "bottone".

let myButton = document.getElementById("mybutton");

// Andiamo a creare una variabile per collegare il nostro "main".

let myMain = document.getElementById("mymain");

//Vado ad aggiungere la classe "hidden" a "myMain". 

myMain.classList.add("hidden");

// Andiamo a settare il nostro bottone.

myButton.addEventListener("click",

    function(){

        // Andiamo a rimuovere la classe "hidden" al nostro "main".

        myMain.classList.remove("hidden");

        // Andiamo ad inserire "innerHtml" con una stringa "vuota" e la "console.clear" per resettare la "Console" e il "Container" per non generare altre square al click di "play".
        
        myContainerSquare.innerHTML = '';
        console.clear();
        
        // 1) Andiamo a creare un ciclo "for" da 1 a 100.

        for(let i = 1; i <= 100; i++){

            // 6) Andiamo a creare una variante per collegare la "Funzione".

            let newElement = createSquare();

            // 8) Andiamo a creare il "clicked" per le nostre "square".

            newElement.addEventListener("click",

                function(){

                    newElement.classList.toggle("clicked");

                    console.log("Hai selezionato la square n. ", i);

                    // 7) Aggiungiamo al nostro "newElement" la scritta "i" che andrà ad inserire i relativi numeri (1,2,3,4,5, etc...).

                    newElement.innerHTML = (i);

                }, {once : true}
            )

            myContainerSquare.appendChild(newElement);

            // 7) Aggiungiamo al nostro "newElement" la scritta "i" che andrà ad inserire i relativi numeri (1,2,3,4,5, etc...).

            // newElement.append(i);

            // console.log(newElement, i)
        }
    }
)

// 2) Andiamo a creare la nostra "Funzione".

function createSquare() {

    // 3) Andiamo a creare i nostri "div".

    const myElement = document.createElement("div");

    // 4) Andiamo ad aggiungere la nostra classe ".square" ai "div".

    myElement.classList.add("square");

    // 5) Ritorno.

    return myElement
}

