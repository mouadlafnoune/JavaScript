// #### Rest Operator

// const calcul = (...numbers) => {
//   return numbers.map(number => number * 2)
// }
// let result = calcul(7, 4, 10, 4, 8, 27)
// console.log(result);

// let [a, b, c, ...d] = result;
// console.log(a, b, c, d)

//##### spread Operator

// let names = ['Basma','Walid','Yassine','Mouad'];
// let people = ['Kamal','Aymane',...names];

// let namesClone = [...names, ...people];

//console.log(people)

// Add element in array
// people = ['Khadija', ...people]
//console.log(people)

// let person = {
//   name: "Mouad Lafnoune",
//   age: "22"
// }
// let personClone = {
//   ...person,
//   address: 'Casa'
// }
// console.log(person, personClone)

//##### Set
// let names = ['aaaa','nnnn','azerty','aaaa']
// let mySet = new Set(names);
// names.add('Mouad');
// names.add('Basma').add('Kamal');
//mySet.delete('nnnn');
// console.log(mySet.has('aaaa'))
// mySet.clear()
// console.log(mySet.size)
// console.log(mySet);

//###### Double Negation !!
let person = {
    name: "Mouad Lafnoune",
    age: "22"
  }

  // if(person){
  //   console.log('exist')
  // }else{
  //   console.log('not exixst')
  // }

  // let result = person ? true : false;
  let result = !!person;

  console.log(result);
