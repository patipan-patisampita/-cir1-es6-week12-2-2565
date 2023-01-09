//1.arrow function with add
const add = (a,b)=>{
    // return [a,b]//array
    return {a,b} //object
}
const {a,b} = add(10,5)
console.log(`Total ${a} + ${b} = ${a + b}`)

//2.short arrow function with mul
const mul =(a,b)=> a * b
const sum = mul(10,5)
console.log(`Mul ${a} + ${b} = ${sum}`)

//3.short arrow function with div
const div=(a,b)=>a/b
const sumDiv = div(10,5)
console.log(`Div ${a} / ${b} = ${sumDiv}`)

//4.short arrow function with Del
const del=(a,b)=> a-b
const sumDel = del(10,5)
console.log(`Sum ${a} - ${b} = ${sumDel}`)
