
const form = document.querySelector('.my-form')
const feedback = document.querySelector('.feedback')
const myUsername = document.querySelector('#username')

let pattern = /^[a-zA-Z0-9]{5,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
   let username = form.username.value;
   if(pattern.test(username)){
      feedback.textContent = "This username is valid"
   }else{
    feedback.textContent = "This username invalid"

   }
})

myUsername.addEventListener('keyup', () => {
   let username = form.username.value;
   if(pattern.test(username)){
      form.username.setAttribute('class', 'success')
      feedback.textContent = "This username is valid"
   }else{
      form.username.setAttribute('class', 'error')
      feedback.textContent = "This username invalid"
   }
})

// let username = "bright"
// let pattern = /^[a-zA-Z0-9]{5,10}$/;
// console.log(pattern.test(username));