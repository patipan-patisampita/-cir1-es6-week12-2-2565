//arrow fuctions
//1.define function
// function calcArea(pi,radius){
//     return pi*(radius**2) //pi*r^2
// }
// const area = calcArea(3.14,5)//called function
// console.log(area)

//2.1 express function
// const sum  = function calcArea(pi,radius){
//     return pi*(radius**2) //pi*r^2
// }
// const area = sum(3.14,5)//called function
// console.log(area)

//2.2 Anonymouse function
// const sum  = function (pi,radius){
//     return pi*(radius**2) //pi*r^2
// }
// const area = sum(3.14,5)//called function
// console.log(area)

//2.3 Arrow function
// const sum  = (pi,radius)=>{
//     return pi*(radius**2) //pi*r^2
// }
// const area = sum(3.14,5)//called function
// console.log(area)

//2.4 short Arrow function
const sum  = (pi,radius)=> pi*(radius**2) //pi*r^2
const area = sum(3.14,5)//called function
console.log(area)
