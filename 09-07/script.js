function test(){
    console.log("test function called");
}
function executeTask(task){
    console.log("Another Functions");
    task();
}

// executeTask(test);
// executeTask(test());

// array is group of element (homogenious and heterogenious)
// int arr[5]; indix will be acess to 0-4 but 5 index will be there with null for stating that it is the end;

let arr = [23,3,4,5,6,7,8,9];
// console.log(arr);
// arr.push(100);
// console.log(arr);
// let item = arr.pop();
// console.log(arr);
// console.log("poped item is ",item);

// arr.unshift(200);
// console.log(arr);
// arr.shift();
// console.log(arr);


// splice
// arr.splice(2,2,1001,1002,1003);
// console.log(arr);


// triversing an array
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);

// if we have to use this then made a function
function printArray(){
    for(i=0;i<arr.length;i++)
        console.log(arr[i]);
}
// printArray();

// what if we have multiple arrays
// let arr1 = [1,2,3,4,5,6,7,8]
// function printArray(arr){
//     for(i=0;i<arr.length;i++)
//         console.log(arr[i]);
// }
// printArray(arr);

// what is we want to do other than consoleing
let arr1 = [1,2,3,4,5,6,7,8]
function print(item,index,array){
    console.log("called",item,index,array);
}
function print1(){
    console.log("Another");
}
function printArray(arr,task){
    for(i=0;i<arr.length;i++){
        // console.log(arr[i]);
        task(arr[i],i,arr);
    }
}
printArray(arr,print);

// filer:

arr.filter(function (item){
    if(item%2 == 0)
        return true;
    else 
    return false; // if dont write else then it will return undefine and undifine is not true;
})
