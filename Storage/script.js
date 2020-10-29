// creating and getting data from LocalStorage

// localStorage.setItem('name', 'Mouad LAFNOUNE')
// localStorage.setItem('age', 22)

// Retreive data from localStorage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

//Update data
// localStorage.setItem('name', 'Ayoub');
// name = localStorage.getItem('name');
// console.log(name);

//Deleting data from storage
// localStorage.removeItem('name')
// name = localStorage.getItem('name')
// console.log(name)

// localStorage.clear()

// BSON = Binary Script Object Notation
let users = [
            {name: "Basma", active: true, note: 20},
            {name: "Walid", active: false, note: 19},
            {name: "Mohamed", active: true, note: 9},
            {name: "Ayoub", active: false, note: 14},
            {name: "Mouad", active: true, note: 15},
        ];

localStorage.setItem('users', JSON.stringify(users));
const userStored = localStorage.getItem('users')
console.log(JSON.parse(userStored))
console.log(users)