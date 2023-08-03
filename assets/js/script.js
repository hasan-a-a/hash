const accounts01 = [["admin01","123"],["admin02","234"],["admin03","345"]]
const accounts02 = {admin01:"123", admin02:"234", admin03:"345"}
let p1 = {name:"hassan",age:33,state:"beirut"}
// let p2 = {name:"hassan",age:33,state:"beirut"}
// let p3 = {name:"hassan",age:33,state:"beirut"}
// console.log(accounts01)
// console.log(accounts02.keys)
// console.log(accounts02.admin03)
// let admin = prompt("enter username")
// function main(){
//     if(admin in accounts02){
//         console.log(`welcome ${admin} your pass is: ${accounts02[admin]}`)
//     }else{
//         console.log("you are not registered")
//     }

// }
function getage(){
    let name=prompt("enter your name")
    if(p1.name == name){
        console.log(`${p1.name} is ${p1.age} years old`)
    }else{
        console.log("wrong name")
    }
}
