// console.log("hello user");
'use strict'

// a = 10; // normally var;
// console.log(a);
// console.log(typeof a);

// a = "text";
// console.log(a);
// console.log(typeof a);


//let vs var
console.log(username);  // undefined;
var username = "Code";
console.log(username);


// console.log(username);
// let username = "Code";
// console.log(username);


// function test(x,y=0){
//     console.log("test called",x,y);
//     console.log(arguments);
    // console.log(typeof arguments);
    // console.log(typeof x);
    
// }
// test(23,4);
// test();
// test(23);
// test([10,11,12],2,3,"rohan")



//call back function
function test(){
    console.log("My task");
}
function test1(){
    console.log("My task 1");
}
function executeTask(task){
    console.log("Task being executed");
    task();

}
// executeTask(test);
// executeTask(test1);
// executeTask(function(){
//     console.log("another function");
// });


function abc(a)
{
    console.log(a);
}
let x = 10;
let y = 20;
abc(100);