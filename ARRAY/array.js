// let ages = [5, 25, 50, 10, 7, 58];
// let filtredAges = ages.filter(age => age >= 25 )
// console.log(filtredAges)

// let users = [
//     {name: "Basma", active: true},
//     {name: "Walid", active: false},
//     {name: "Mohamed", active: true},
//     {name: "Ayoub", active: false},
//     {name: "Mouad", active: true},
// ];

// let result = users.filter(user => user.active)
// console.log(result)

// let ages = [5, 25, 50, 10, 7, 58];

// let result = ages.map(age => age + 10);
// console.log(result)

// let users = [
//         {name: "Basma", active: true},
//         {name: "Walid", active: false},
//         {name: "Mohamed", active: true},
//         {name: "Ayoub", active: false},
//         {name: "Mouad", active: true},
//     ];

//     let result = users.map(user => { 
//         if(user.active){
//         return { name: user.name.toUpperCase(),
//                  active: user.active
//                 };
//     }else{
//         return {name: user.name.toLowerCase()};
//     }})

//     console.log(result)

// let ages = [5, 25, 50, 10, 7, 58];
// let result = ages.reduce((accimilateur, age) => accimilateur + age, 0);
// console.log(result)
// let ages = [5, 25, 50, 10, 7, 58];
//let result = ages.find(age => age > 30);

// let users = [
//         {name: "Basma", active: true},
//         {name: "Walid", active: false},
//         {name: "Mohamed", active: true},
//         {name: "Ayoub", active: false},
//         {name: "Mouad", active: true},
//     ];
// let search = 'mou';
// let result = users.find(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()))     

// console.log(result)

/* Sort the numbers */
// let ages = [5, 2, 50, 25, 10, 7, 58];
// let result = ages.sort((a,b) => a - b);
// console.log(result);

/* Sortting the String */
// let persons = ['Basma','Walid','Ahmed','Mohamed','Ayoub','Mouad']
// let result1 = persons.sort();
//console.log(result1)


let users = [
        {name: "Basma", active: true, note: 20},
        {name: "Walid", active: false, note: 19},
        {name: "Mohamed", active: true, note: 9},
        {name: "Ayoub", active: false, note: 14},
        {name: "Mouad", active: true, note: 15},
    ];

   let result = users.sort((a, b) => b.note - a.note)
                     .filter(user => user.active)
                     .map(user => user.name)
   console.log(result);