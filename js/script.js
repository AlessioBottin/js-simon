// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Creo l' array correct numbers 
const correctNumbers = [];

// Genero  numeri casuali e diversi finchè nell' array correctnumbers non ci sono 5 numeri
while (correctNumbers.length < 5) {
    // Genero un numero random 
    let newNumber = getRndInteger(0, 100);

    // Verifico se è gia presente nell' array 
    let numberFound = false;
    
    correctNumbers.forEach((element) => {
        if (newNumber !== element) {
            numberFound = false;
        } else {
            numberFound = true;
        }
    }); 

    // Se no lo pusho, se si, non lo pusho 
    if (!numberFound) {
        correctNumbers.push(newNumber);
    } 
}

console.log(correctNumbers); //test 

// Creo un alert per ogni numero
correctNumbers.forEach((element) => {
    userMessage = `
    Simon says: ${element}
    `;

    alert(userMessage);
});

// Creo l' array per raccogliere i numeri dell' utente 
const userNumbersArray = [];

// Ora dichiaro la funzione con i prompt che partirà tra 30 secondi 
setTimeout( function () {

    // Finchè nell' array userNumbersArray non ci sono 5 numeri chiedo numeri all utente
    while (userNumbersArray.length < 5) {
        let userNumber = parseInt( prompt('Dimmi uno dei cinque numeri'));

        // Verifico se è gia presente nell' array 
        let numberFound = false;
    
        userNumbersArray.forEach((element) => {
            if (userNumber !== element) {
            numberFound = false;
            } else {
            numberFound = true;
            }
        }); 

        // Se no lo pusho, se si, non lo pusho 
        if (!numberFound) {
        userNumbersArray.push(userNumber);
        };
    } 
}, 2000);

console.log(userNumbersArray); //test



// FUNCTIONS

// Genera 5 diversi numeri e li pushathem in un array 
// array ---> nome dell' array in cui vuoi inserire i numeri 
// function getDifferentRndNmbrsArray(array)

// Generates random numbers between min and max 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
} 
