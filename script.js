// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let arrayNum = []
const divNum = document.getElementById("numeri")
const clock = setTimeout(scriviNum, 30000);
let numUser = [];
let numUguali = [];

while (arrayNum.length < 5){
    let numbers = Math.floor(Math.random()*100 +1);
    let doppio = arrayNum.includes(numbers);
    if (doppio == false){
        arrayNum.push(numbers)
    }
}
console.log(arrayNum, numUser)

divNum.innerHTML = `${arrayNum}`

function scriviNum(){
    while (numUser.length < 5){
        let numInseriti = parseInt(prompt("inserisci i numeri che hai visto prima"));
        numUser.push(numInseriti)
    }  
    for (let i = 0; i < arrayNum.length; i++){
        if(arrayNum.includes(numUser[i])){
            numUguali.push(numUser[i])
        }
    }
    divNum.innerHTML = `${numUguali}`
}


// ora devo stampare i numeri ,uguali a quelli che sono stati generati, che l'utente ha inserito 
 
    //se i numeri dell'array numUser sono uguali ai numeri dell'array arrayNum allora li pusho sull'array che stamperò alla fine
        //confrontare il primo num inserito dall'utente con tutti quelli presenti nell'array di numeri random
    // per confrontare tutti i numeri di un array con un altro ho bisogno di attraversare tutto l'array scritto dall'utente e confrontarlo poi 


