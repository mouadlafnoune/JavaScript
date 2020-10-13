// Object
// let user = {
//     firstName: "Mouad",
//     lastName: "Lafnoune",
//     age: 22,
//     email: "mouad@gmail.com",
//     active: true,
//     courses: [
//         {title: "Angular", price: 45},
//         {title: "ReactJS", price: 35},
//         {title: "VueJS", price: 40},
//     ],
//     login: () => {
//         console.log('log with this user.')
//     },
//     showCourses: function()  {
//         this.courses.forEach(course => console.log(course.title, course.price));
//     }
// }
// console.log(user.showCourses());
// console.log(user.login());

// user.email = "laf@gmail.com";
// console.log(user);
// console.log(user['firstName']);
// user['age'] = 23;
// console.log(user)

// const header = document.querySelector('h1');
// const paras = document.querySelectorAll('div.myContent > h2.title');
// paras.forEach(para => console.log(para))

/************ change VALUE */

// const header = document.querySelector('#title');
// console.log(header.innerText += " JavaScript")

// const headers = document.querySelectorAll('h2');
// headers.forEach((header,index) => {
//     header.innerText += ' .'
// });

// const division = document.querySelector('.myContent')
// console.log(division.innerHTML)
// division.innerHTML += "<a href='https://brightcoding.teachable.com'>Bright Coding</a>"


/*** change attr */

const anchor = document.querySelector('a');
console.log(anchor.getAttribute('href'))
anchor.setAttribute('href', 'https://facebook.com')
anchor.innerText = 'facebook'


const para = document.querySelector('p');
para.setAttribute('class', 'error')
para.setAttribute('style','color: red')
