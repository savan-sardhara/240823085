
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
// let num = 256
// let orignal = 256
// let rev = 0
// while(num > 0){
//     rev = rev * 10 + (num % 10)
//     num = Math.floor(num / 10)
// }
// console.log(`palidrom  : ${rev==orignal ? "palidrom" : "not plidrom"}`)

// 9. prime number 
// num = 7
// res= "Prime"
// if(num%2===0 || num === 0){
//     res="Not prime"
// }else if(num===2){
//      res="Not prime"
// }else{
//     for(let i=3; i<=Math.sqrt(num); i+=2){
//         if (num % i ===0) {
//             res="Not prime"
//         }
//     }
// }
// console.log(`Result :  ${res}`)


// 10. count digits in number 
// let num= 234
// console.log("digits is number "+num.toString().length)


// 11.sum of all digit 
// let num = 342
// let sum=0
// while(num > 0){
//     sum += num % 10
//     num = Math.floor(num/ 10)
// }

// console.log(`sum of all digit ${sum}`)

// 12. armstrong number 
// let num= 153,sum=0
// let orignal = num
// let pow=num.toString().length
// while (num > 0) {
//     lnum = num % 10
//     sum += Math.pow(lnum,pow)
//     num = Math.floor(num / 10)
// }
// console.log(`Sum is : ${sum} so Number is ${sum===orignal ? "" : "Not"} Armstrong`)

// 13.fibonacci series (try to chek if we coud do somthing about the first two number)
// let n=5
// let first=0
// let second=1
// console.log(0);
// console.log(1);
// for(let i=2; i<n; i++){
//     sum=first+second
//     first=second
//     second=sum
//     console.log(" "+sum);
// }

// 14.check vovel constant 
// let alph='a'
// let str="apple"
// if(str.includes('a'||'e'||'i'||'o'||'u')){
//     console.log("vowel");
// }else{
//     console.log("constant");
// }

// 15.input to arthmetic operation
// let arith="15 + 5"
// let res = eval(arith)
// console.log(res);


// 16. Find GCD (HCF)
// let num1=20,num2=28
// while(num2!=0){
//     let temp=num2
//     num2=num1%num2
//     num1=temp
// }
// console.log(num1);

// ----------OR----------

// const arr1=new Array();
// const arr2=new Array();
// for(let i=1; i<=num1; i++){
//     if(num1%i==0){
//         arr1.push(i)
//     }
// }
// for(let i=1; i<=num2; i++){
//     if(num2%i==0){
//         arr2.push(i)
//     }
// }
//let common arr1.filter((val)=>arr2.includes(val))
// consol.log(Maths.max(...commmon))



// 17.perfect number 
// let num=28,sum=0
// for(let i=1;i<num; i++){
//     if (num%i==0) {
//         sum=sum+i
//     }
// }
// console.log(`${sum===num?"Perfect":"Not Perfect"}`);

// 18. print all the divisor
// let num=10
// for(let i=0; i<=num; i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

// 19.positve,negativve,zero
// let num=20
// if(num==0){
//     console.log("zero")
// }else if(num<0){
//     console.log("Negative");
// }else{
//     console.log("positive");
// }

// 20. find power (exponetial)
// let num=2,pow=3
// let res=1
// for(let i=0;i<pow;i++){
//     res*=num
// }
// console.log(res);

// -----------OR---------

// console.log(num**pow)

// --------OR------------

// console.log(Math.pow(num,pow))
