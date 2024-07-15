// let array = [{name:"rohan"},{name:"rohan"},{name:"rohan"},{name:"rohan"},{name:"rohan"},{name:"rohan"}]
// function removeObj(name){
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i].name == name)
//         {
//             array.splice(i,1);
//             i--;
//         }
//     }
// }

// removeObj("rohan");
// console.log(array);


// ***** question-02
var arr=[] ;
fetch("https://reqres.in/api/Users?page=2")
.then((data)=>data.json())
.then((arrayOfObj)=>{
    console.log("arrayOfObj",arrayOfObj);
    arr = arrayOfObj.data;
    console.log(100,arr);
    let thead = document.querySelector('thead');
    let tbody = document.querySelector('tbody');
    console.log("obj",arr[0]);
    for(let x in arr[0])
    {
        let th = document.createElement('th');
        th.innerHTML = x;
        thead.append(th);
    }

    arr.forEach((obj)=>{
        let tr = document.createElement('tr');
        for(let key in obj)
        {
           let td =  document.createElement('td');
           td.innerText = obj[key];
           tr.append(td);
        }
        document.querySelector('tbody').append(tr);
    })
  
})

window.addEventListener('load',()=>{
     // document.querySelector("table").append(tbody)
})