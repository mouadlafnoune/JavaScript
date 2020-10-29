run();
async function run(){
console.log('before')

try {
    let user = await getUser(10);
  console.log("Je suis la : ",user);

let produits = await getProduct(user.id)
console.log("La liste : ", produits)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.log(err))

} catch (error) {
    console.log(error)
}

console.log('between')
console.log('after')
}
function getUser(id) {
    return new Promise((resolve, reject) => {
        let status = true;
        setTimeout(() => { 
            console.log('retreive data from database')
            if(status){
                return resolve({ id: id, name: "Mouad Lafnoune" })
            }else{
                return reject("user not found !!")
            }
            
        }
        , 2000)
    })
}
function getProduct(userId) {
    return new Promise((resolve, reject) => {
        let status = true;
        setTimeout(() => { 
            console.log('retreive products from database')
            if(status){
                return resolve(['p1','p2','p3'])
            }else{
                return reject("products not found !!")
            }
            
        }
        , 2000)
    })
    

}

let p = new Promise((resolve, reject) => {
    let statut = true;
    if(statut){
        resolve("OK")
    }else{
        reject("KO")
    }
})

p
 .then(res => console.log(res))
 .catch(err => console.error(err))