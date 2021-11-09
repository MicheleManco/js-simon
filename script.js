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


// ora devo stampare i numeri che l'utente ha inserito (solo quelli uguali)
 
    //se i numeri dell'array numUser sono uguali ai numeri dell'array arrayNum allora li pusho sull'array che stamperò alla fine
        //confrontare il primo num inserito dall'utente con tutti quelli presenti nell'array di numeri random arrayNum.includes(numUser[i])
        //stampo al posto del div stampato in precedenza l'array che ho formato contenente i numeri uguali 


