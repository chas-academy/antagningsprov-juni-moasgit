

function uppg8(){
    const person = [
        {name: "Moa", age: 28},
        {name: "Emil", age: 32},
        {name: "Emma", age: 30},
        {name: "Kalle", age: 34},
        {name: "Pelle", age: 1}
    ];

        function alla(arrayOfperson) {
            arrayOfperson.forEach(person =>{
                if (person.age > 30) {
                    console.log(person.name);
                }
            });
        }
        alla(person);

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


}
uppg8();

module.exports = { uppg8 };