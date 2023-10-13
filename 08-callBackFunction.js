// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Manvendera'
    }
    ,
    {
        No : 2,
        Name : 'Pathak'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Manvendera "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Manvendera");
console.log(obj);