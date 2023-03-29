/*
Write a typescript program which contains one function named as Maximum 
That function accepts array of number and returns the summation of each number from array


ip 23 89 6 29 56 45 77 32
op second maximum number is 77
*/


let numbers = [23,89,6,29,56,45,77,32]


numbers.sort(function(a, b){
    return a-b; 
})

let i=numbers.length
var ans=numbers[i-2]

console.log(ans)