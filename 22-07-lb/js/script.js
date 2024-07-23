const Employee = [
    {
        id:"E1",
        name : "Alice",
        basicSalary:50000,
        performanceRating : [
            {month:"Jan",rating:4.5},
            {month:"Feb",rating:4.0},
            {month:"Mar",rating:5.0}
        ],
        attendance:[
            {month:"Jan",daysPresent:20,totalWorkingDays:22},
            {month:"Feb",daysPresent:18,totalWorkingDays:20},
            {month:"March",daysPresent:22,totalWorkingDays:22},
        ]
    },
    {
        id:"E2",
        name : "Rohan",
        basicSalary:50000,
        performanceRating : [
            {month:"Jan",rating:0.5},
            {month:"Feb",rating:2.2},
            {month:"Mar",rating:2.0}
        ],
        attendance:[
            {month:"Jan",daysPresent:20,totalWorkingDays:22},
            {month:"Feb",daysPresent:0,totalWorkingDays:20},
            {month:"March",daysPresent:22,totalWorkingDays:22},
        ]
    }
]


function calculateSalary(empDetails){
    empDetails.forEach((emp)=>{
     let salary = emp.basicSalary;

     // calculating increment 
     let avgRating = 0;
     emp.performanceRating.forEach((obj)=>{
      avgRating  += obj.rating;
     
     })
     avgRating /= emp.performanceRating.length;
     let incrementAmount = 0;
     if(avgRating >= 4.5 )
     {
        incrementAmount = (salary*20)/100;
     }
     else if(avgRating >= 4.0 )
     {
        incrementAmount = (salary*10)/100;
     }
     else if(avgRating >= 3.5 ){
        incrementAmount = (salary*5)/100;
     }

     // calculating decrement 
     let totalDays = 0;
     let presentDays = 0;
     emp.attendance.forEach((obj)=>{
       totalDays += obj.totalWorkingDays;
       presentDays += obj.daysPresent;
     })
    let daysInPercent = (presentDays / totalDays) * 100;
    let decrementAmount = 0;
    if(daysInPercent < 90 )
    {
        decrementAmount = (salary * 5)/100; 
    }
    
    salary = salary + incrementAmount - decrementAmount;
    console.log("salary for employee" , emp.name ,"is",salary);

    })
}

// calculateSalary(Employee)


/*
Input: 
a = [1,3,5,7,9]  , b = [1,2,3,4,6,8,10]

Output: 
Union: [1,2,3,4,5,6,7,8,9,10]
Intersection: ans =[1,3]
*/
a = [1,3,5,7,9]  , b = [1,2,3,4,5,6,8,10]


function union(arr1,arr2)
{
let newArray = [...arr1,...arr2]
let union = newArray.filter((ele,index,array)=>array.indexOf(ele)==index)
return union;
}

function intersection(arr1,arr2){
let  intersection  = arr1.filter(ele=>{
    return arr2.find(num=>{
        return num == ele;
    })
})
return intersection;
}

console.log("union is ",union(a,b));
console.log("intersection is ",intersection(a,b));
