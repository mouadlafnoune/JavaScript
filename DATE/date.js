// let now = new Date();
// console.log(now)
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//timestamps
// console.log(now.getTime())
// console.log('----------------')
// var before = new Date("2020-10-19"); // ISO
// var d = new Date("2020-10-19T12:00:00Z"); // ISO
// var d = new Date("19/10/2020"); // ISO
// var d = new Date("Mon 19 2020"); // long
// var d = new Date("Mon Oct 19 2020 17:55:27 GMT+0100 (UTC+01:00)"); // ISO

// console.log(now.getTime(), before.getTime())
// let diff = now.getTime() - before.getTime();
// let seconds = diff / 1000;
// console.log("seconds :", seconds)

// let minutes = seconds / 60;
// console.log("minutes :", minutes)

// let hours = minutes / 60;
// console.log("minutes :", hours)

// let days = hours / 24;
// console.log("days :", Math.round(days))

// const clock = document.querySelector('.clock');
// const myOclock = () => {q
//     let now = new Date();
//     let hour = now.getHours();
//     let minute = now.getMinutes();
//     let second = now.getSeconds();

//     let html = `<span>${ hour }</span> :
//                 <span>${ minute }</span> :
//                 <span>${ second }</span>
//                 `

//                 clock.innerHTML = html
// }

// setInterval(myOclock, 1000);

let now = new Date();
console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'MMMM'));