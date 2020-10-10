//  var name = 'mouad';
//  let age = 35;
 // const PI = 3.14;
 // status = true;

 // console.log(name, age, PI, status);

 // if (name) {
 //   let i = 1;
//    console.log(i);
//  }
//  console.log(i);

// String
// let email = 'mouad@gmail.com';
// console.log(email);

 //String Concatenation
// let first = 'mouad';
// let last = 'lafnoune';

// let fullName = first + ' ' + last;
// console.log(fullName);

 // Getting Characters
// console.log(fullName[0]);
 // String Length

// console.log(fullName.length);

 //String methods
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// let position = email.indexOf('.');
// console.log(position);

// let email = 'mouad@gmail.com';
//  let result = email.lastIndexOf('i');
// let result1 = email.slice(0, 5);
// let result2 = email.substr(5, 5);
// let result = email.replace(/a/g, 'm');

// console.log(result1);
// console.log(result2);
// console.log(result);

// const PI = 3.14;
// let raduis = 10;
// console.log(PI, raduis);
// let surface = PI * raduis ** 2;
//console.log(surface);
// let longueur = 5;
// let largeur = 10;
// BIDMAS
// let perimetre = (longueur + largeur) * 2;
// console.log(perimetre);
// Operation +, -, /, *, **, %
// console.log(raduis / 4);
// console.log(raduis + 2);
// console.log(raduis - 2);
// console.log(raduis ** 2);
// console.log(raduis * 2);
// console.log(raduis % 2);

//let i = 1;
//i = i + 1;
//i++;
//i += 4;
// console.log(i);
// let j = 1;
// j -= 4;
// console.log(j);

// Template Strings
// let course = 'learn JavaScript';
// let instructor = 'Mouad Lafnoune';
// let students = 100;
// let result = `Course name: ${course} by ${instructor} has ${students} students`;
// console.log(result);

// HTML Template
// let content = `
//    <h1>${course}</h1>
//    <p>Instructor: ${instructor}</p>
//    <em>Students: ${students}</em>
// `;
// console.log(content);

//let courses = ['angular', 'react', 'symfony'];
// courses[1] = 'ReactJS';
// console.log(courses);
//let random = ['angular', 10, true];
// let result = courses.join(' - ');
//let result = courses.indexOf('angular');
// add last
//let result = courses.push('java');
// add first
//courses.unshift('spring');
// delete last
//courses.pop();
// delete first
// courses.shift();

// console.log(courses);

// * Methode return boolean
// let email = 'mouad@gmail.com';
// let result = email.includes('@');
// console.log(result);

// let age = '35';
// age = Number(age);
// console.log(age + 10);
// let age = 35;
// age = String(age);
// console.log(typeof age);

// let age = 35;
// console.log(age === 35);
// console.log(age === '35');

// for(let i = 1; i <= 5; i++ ){
//    console.log(`iteration : ${i}`);
// }
// let j = 1
// while(j <= 5){
//     console.log(j);
//     j++;
// }
// let j = 1
// do {
//     console.log(`J: ${j}`);
//     j++;
// }while(j <= 5)

// let numbres = [10,82,28,0,35,18,100,45,99];
// for (let i = 0; i < numbres.length; i++) {
//     if(numbres[i]==0){
//         continue;
//     }
//     if(numbres[i] == 100){
//         break;
//     }
// console.log(`score: ${numbres[i]}`);    
// }

// let age = 19;
// let result = (age >= 18) ? "Majeur" : "Mineur";
// console.log(result);

// const speak = function(name, gender='M.'){
//     console.log(`je suis ${gender} ${name}`);
// }
// speak('mouad');

// const surfaceCercle = function(rayon){
//     return  3.14 * rayon ** 2;
// }

const surfaceCercle = rayon =>  3.14 * rayon ** 2;


let surface = surfaceCercle(20);
console.log(surface);
