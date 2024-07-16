// DOM // document like tree structure --->  how did it ?? -> browser
// document.write("<h1>Hello</h1>")

var elements = document.getElementsByTagName('p')   // HTMLcollection --> kind of array not an array --> group of object  --> can be access by array like elements[0]
// console.log(elements);

// elements.forEach(element => {
//     console.log(element);
// });

// console.log(elements[0]) // 0 is the key not the indexes
// only container have this innerHTML and innerText property
// console.log(elements[1].innerText);
// console.log(elements[1].innerHTML);

// elements[1].innerText = "Demo <b>Para</b>";
// elements[1].innerHTML = "Demo <b>Para</b>";  // there is a problem bw developer and designer so we will use id 

document.getElementById("para-2").innerHTML = "Demo <b>Para</b>"  // if miltiple id is same then 1st occurance will come

// to access group of eleemnt 

var elements = document.getElementsByClassName("choice");
// console.log(elements);

var elements = document.querySelectorAll(".choice");
// console.log(elements);

function test(){
    document.querySelector('#box').value = "initial text"

}
