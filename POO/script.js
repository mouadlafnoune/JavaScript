class Car {
    constructor(marque, hp, speed){
        this.marque = marque;
        this.hp = hp;
        this.speedMax = speed;
    }
    // Methods
    diagnostic(){
        console.log(`this car has ${this.hp} HP`);
    }
}

let mercedes = new Car('Mercedes','580', '300');
let bmw = new Car('BMW','600', '320');

console.log(mercedes, bmw);
mercedes.diagnostic();
bmw.diagnostic();

class SuperCar extends Car{
   constructor(marque, hp, speed, s, d){
       super(marque, hp, speed);
       this.spoiler = s;
       this.diffuser = d;
   }
   diagnostic(){
       console.log(this)
   }
}
let myFerrari = new SuperCar('Ferrari', 860, 360, true, "Carbon")
console.log(myFerrari);
 myFerrari.diagnostic();