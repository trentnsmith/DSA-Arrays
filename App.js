const memory = require('./memory');
const Array = require('./Array');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);

    console.log(arr[0]);

    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida");

    console.log(arr[0]);

    function replace(string){
        let newStr = []
        let final = ''
        for(let i = 0; i<string.length;i++){
            if(string[i] === ' '){
                newStr[newStr.length] = '%20';
            } else {
                newStr[newStr.length] = string[i]
            }
        } 
        for(let i = 0; i<newStr.length;i++){
            final += newStr[i];
        }
        return final;
    }
    let str = 'you got what i neeeeed'
    console.log(replace(str))

//Filtering an array
//Imagine you have an array of numbers. 
//Write an algorithm to remove all numbers less than 5 from the array. 
//DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
    function filterArr(arr){
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 5){
                newArr[newArr.length] = arr[i]
            }
        }
        return newArr;
    }

    let arr1 = [1,5,8,3,9,8,8,6,73,4,3]
    console.log(filterArr(arr1));

    //Max sum in the array
    //You are given an array containing positive and negative integers. 
    //Write an algorithm which will find the largest sum in a continuous sequence.
    function maxSum(arr){
        //loop through adding 2 integers
        //then loop through 3 integers...etc
        //each time compare the sum with the existing max sum. replace if higher
        let max = 0;
        for(let i  = 2; i < arr.length-1; i++){
            //i denotes how many items will be added together in this pass
            for(let j = 0; j <arr.length; j++){
                //loop through each item, the inner loop does the summation according to which i we are at
                let sum = 0
                for(let k = 0; k< i; k++){
                    //j+0, j+1 ...etc
                    if(j+k<arr.length){
                        sum += arr[j+k]
                    }
                }
                if(sum > max){
                    max = sum
                }
            }
        }
        return max;
    }
    let arr2 = [4, 6, -3, 5, -2, 1]
    console.log(maxSum(arr2));
}

main();