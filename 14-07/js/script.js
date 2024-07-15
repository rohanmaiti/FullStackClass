// object --> instance of class 
// let object = {}  // empty object 
// let obj = {
//     "name" : "code",   // key can be without ""
//     age:30,
//     name:"text",       // it will overwrite the name key to text
//     education : ["10th","12th"], 
//     marks : {          // nested object
//         "10th" : 601 ,
//         "12th" : 420,
//         "post grad" : 1800 
//     }
// }

// obj.city = "kolkata"  // we can add key and value like this

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[name]);

// delete obj.city;                // to delete some property
// console.log(obj);
// console.log(obj.marks["10th"])  // normally to acess obj key and value we use . but normally if key starts with number or special character or key have space then you cant use by . operator you have to use [""]


// ******* another way to create object
let obj2 = new Object;
// console.log(obj2);


// ******* we can define functions inside object
obj2 = {
    name : "code",
    age : 21,
    // getName : function (){
    //     console.log(name) ;
    //     console.log(obj2.name);
    // }
    
    getName : getMyName,
}
let obj3 = {
    name : "quotient",
    age : 21,
    // getName : function (){
    //     console.log(name) ;
    //     console.log(obj2.name);
    // }
    
    getName : getMyName,
}

function getMyName(){     
    // console.log(obj2.name);
    console.log(this.name)
}
// obj2.getName();
// obj3.getName();

let x = obj3; // x is a referance to obj what ever change you do to x it will change to obj3 aswell
x.name = "rohan";
// console.log(x);
// console.log(obj3);

let a = 10;
let b = a;  // b is not referance but a copy 


// ****** to trivaerse an object 
for(x in obj2){
    // console.log(x); // print all the keys 
    // to get the value 
    console.log(x,obj2[x])  // printing key and values 
}




// ****** assignment *******
function getArrayLength(input) {
	let length = input.length;
	return length;
}
function getEvenLength(input)
{
let x = input.filter(ele=>ele%2==0)
let length = x.length;
return length;
}

/* Type your javascript code here */
function removeIndex(input,index) {
//Apply conditions to verify the index is valid or not
    let boolean;
    if(index>=0 && index<= input.length-1)
        boolean = true;
    else 
    boolean = false;

	return boolean;
}


/* Type your javascript code here */
function removeElement(input, element) {

//check whether element is available or not
//remove all the occurrences of element
    let boolean = input.filter(ele=>ele!=element);
	return boolean;
}


/* Type your javascript code here
Input is an array and return a new array with unique elements
 */
function removeDuplicates(input) {
    input = input.filter((ele,index,array)=>{
       return array.indexOf(ele) == index
    })
	return input;
}

/*.Write a function to receive n number of arguments and return the sum of all the arguments pass */
function addAll()
{
 let sum = 0;
    for(x in arguments)
    sum += arguments[x]
    return sum;
}

console.log(addAll(1,2,3));
console.log(removeDuplicates([1,1,2,3,4,3,2,]))
console.log(removeIndex([1,2,3,4,5],1))
console.log(getEvenLength([1,2,3,4,5,6,7,8]))






