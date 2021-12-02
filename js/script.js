// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Creo l' array correct numbers 
const correctNumbers = [];

// Genero  numeri casuali e diversi finchè nell' array correctnumbers non ci sono 5 numeri
while (correctNumbers.length < 5) {
    // Genero un numero random 
    let newNumber = getRndInteger(0, 100);

    if (!correctNumbers.includes(newNumber)) {
        correctNumbers.push(newNumber);
    }
}

console.log(correctNumbers); //test 

// Creo un alert per ogni numero
correctNumbers.forEach((element) => {
    alert(`Simon says: ${element}`);
});

// Creo l' array per raccogliere i numeri dell' utente 
const userNumbersArray = [];

// Creo l' array matchedNumbers 
const matchedNumbers = [];

// Ora dichiaro la funzione con i prompt che partirà tra 30 secondi 
setTimeout( function () {

    // Finchè nell' array userNumbersArray non ci sono 5 numeri chiedo numeri all utente
    while (userNumbersArray.length < 5) {
        let userNumber = parseInt( prompt('Dimmi uno dei cinque numeri'));

        if (!userNumbersArray.includes(userNumber)) {
            userNumbersArray.push(userNumber)
        } 

        // Ora confronto ognni numero del userNumbersArray con quelli del correctNumbers
        // e dico quanti e quali dei numeri da indovinare sono stati individuati
        userNumbersArray.forEach((singleUserNumber) => {
            // Verifico se è gia presente nell' array 
            if (correctNumbers.includes(singleUserNumber)) {
                if (!matchedNumbers.includes(singleUserNumber)) {
                    matchedNumbers.push(singleUserNumber);
                }       
            }
        });  
    } 

    console.log('userNumber' + userNumbersArray); //test
    console.log('azzeccati' + matchedNumbers); //test
    alert(`Hai azzeccato ${matchedNumbers.length} e sono: ${matchedNumbers}`);
    
}, 2000);



// CORREGGI USANDO INCLLUDES E FILTER E TRASFORMA IN FFUNZIONI DOVE POSSIBILE



// FUNCTIONS

// Genera 5 diversi numeri e li pushathem in un array 
// array ---> nome dell' array in cui vuoi inserire i numeri 
// function getDifferentRndNmbrsArray(array)

// Generates random numbers between min and max 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
} 
