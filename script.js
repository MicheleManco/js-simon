// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let arrayNum = []
const divNum = document.getElementById("numeri")
const clock = setInterval(scriviNum, 3000);
let numUser = [];

function scriviNum(){
    while (numUser.length < 5){
        let numInseriti = prompt("inserisci i numeri che hai visto prima")
        numUser.push(numInseriti)
    }  
}

while (arrayNum.length < 5){
    let numbers = Math.floor(Math.random()*100 +1);
    let doppio = arrayNum.includes(numbers);
    if (doppio == false){
        arrayNum.push(numbers)
    }
}
console.log(arrayNum, numUser)

divNum.innerHTML = `${arrayNum}`

