
//fuction
// function sum(a,b){

//     console.log(a+b);
// }

//sum(4,5);

//Arrow function

// const ArrowMul=(a,b) =>{

//   console.log(a*b);
// }

// ArrowMul(3,4);

// Vowels Count

// function Vwlcount(str){

//   let count=0;

//   for(const ch of str){

//     if(ch =="a"||
//        ch =="e"||
//        ch =="i"||
//        ch =="o"||
//        ch =="u"
//     ){
//       count++;
//     }

//   }

//   return count;
// }

//using Arrow Function 

// const Vwlcount = (str) =>{

//   let count=0;

//   for(const ch of str){

//     if(ch =="a"||
//        ch =="e"||
//        ch =="i"||
//        ch =="o"||
//        ch =="u"
//     ){
//       count++;
//     }

//   }

//   return count;

// }


//For each Loop

// let num =[2,3,4,5];

// num.forEach((num)=>{

//   console.log(num*num);
// })

//Filter Array

// let num=[1,2,3,4,5,6,7,8,9,10];

// let newOddArr=num.filter((val) => {

//   return val>=3;
// })

// console.log(newOddArr);


//practice Qns

// let marks=[50,65,70,75,80,85,90,95,97];

// let newMarksArr= marks.filter((score) => {

//    return score>90;
// })

// console.log(newMarksArr);

//practice Qns 2


let n=prompt("Enter a  no");

let arr=[];

for(let i=1;i<=n;i++){

    arr[i-1]=i;
}

console.log(arr);

let sum=arr.reduce((prev , curr) => {

    return prev+curr;
})

console.log(sum);

let product= arr.reduce((prev , curr) =>{
     
  return prev*curr;
})

console.log(product);