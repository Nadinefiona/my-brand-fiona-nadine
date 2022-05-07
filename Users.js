const allusers = document.querySelector('.box')
console.log(allusers)
async function getuser(){
    const users = await fetch('http://localhost:3000/api/users')
let all = await users.json();
console.log(all)
all.map((one) => {
    console.log(one)
    const {
        name,
        email,
        image,
        date
    } = one;
    allusers.innerHTML += `  ` 
})
}
getuser()
