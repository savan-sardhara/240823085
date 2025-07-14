
// 1. even odd program
// const num = 10
// if(num%2==0){
//     console.log("Even ")
// }else{
//     console.log("odd")
// }


// 2. max of two numbers 
// const [a,b]=[20,80]
// const res = a>b ? a : b
// console.log(`max is ${res}`)

// 3. check leap year
// const year=2003
// const res= year%4 ? "leap year" : "not leap year" 
// console.log(res)

// 4. sum of natural number 
// var inp=15
// var res=0
// for(i=0; i<=inp; i++){
//   res+=inp
// }
// console.log(`output : ${res}`)

// 5 . factorial 
// var num=5
// var fact=1
// for(i=2; i<=num; i++){
//     fact=fact*i
// }
// console.log(`factorial : ${fact}`)

// 6. multiplication table 
// let num=5
// for(let i=1; i<=10; i++){
//     console.log(`${num} X ${i} = ${num*i}`)
// }

// 7. reverse the number 
// let num = 256
// let rev = 0
// while(num > 0){
//     rev = rev * 10 + (num % 10)
//     num = Math.floor(num / 10)
// }
// console.log(`reverse : ${rev}`)

// 8. palidrom number 
let num = 256
let orignal = 256
let rev = 0
while(num > 0){
    rev = rev * 10 + (num % 10)
    num = Math.floor(num / 10)
}
console.log(`palidrom  : ${rev==orignal ? "palidrom" : "not plidrom"}`)