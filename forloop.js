//1.for the given json iterate over all loops(for,foreach,for in,for of)


let object=[
    {"person":"John",
    "age":30,
    "company":"Google"
},
    {"person":"Mohn",
    "age":37,
    "company":"Flipkart"
},
    {"person":"Kohn",
    "age":38,
    "company":"Amazon"
},
    {"person":"Sohan",
    "age":40,
    "company":"Myntra"
},
    {"person":"Jenny",
    "age":70,
    "company":"Apple"
},
]
// for loop
for (let i=0; i<object.length; i++){
    console.log(`
                name:${object[i].person}
                age:${object[i].age}
                company:${object[i].company}
                `)
}
//forEach
console.log('foreach output')
object.forEach(data=>{
    console.log(`
    Person: ${data.person}
    age: ${data.age}
    company: ${data.company}
    `)
})

//fon in

console.log('for in output')
for (let key in object){
  
console.log(`

person:${object[key].person}
age:${object[key].age}
company:${object[key].company}
`)
}

// //for of

console.log('for of output');
for (let data of object){
    console.log(`
    name:${data.person}
    age:${data.age}
    company:${data.company}
    `) 
}
        
    
// name:John
// age:30
// company:Google

// forloop.js:28 
// name:Mohn
// age:37
// company:Flipkart

// forloop.js:28 
// name:Kohn
// age:38
// company:Amazon

// forloop.js:28 
// name:Sohan
// age:40
// company:Myntra

// forloop.js:28 
// name:Jenny
// age:70
// company:Apple

// forloop.js:35 foreach output
// forloop.js:37 
// Person: John
// age: 30
// company: Google

// forloop.js:37 
// Person: Mohn
// age: 37
// company: Flipkart

// forloop.js:37 
// Person: Kohn
// age: 38
// company: Amazon

// forloop.js:37 
// Person: Sohan
// age: 40
// company: Myntra

// forloop.js:37 
// Person: Jenny
// age: 70
// company: Apple

// forloop.js:46 for in output
// forloop.js:49 

// person:John
// age:30
// company:Google

// forloop.js:49 

// person:Mohn
// age:37
// company:Flipkart

// forloop.js:49 

// person:Kohn
// age:38
// company:Amazon

// forloop.js:49 

// person:Sohan
// age:40
// company:Myntra

// forloop.js:49 

// person:Jenny
// age:70
// company:Apple

// forloop.js:59 for of output
// forloop.js:61 
// name:John
// age:30
// company:Google

// forloop.js:61 
// name:Mohn
// age:37
// company:Flipkart

// forloop.js:61 
// name:Kohn
// age:38
// company:Amazon

// forloop.js:61 
// name:Sohan
// age:40
// company:Myntra

// forloop.js:61 
// name:Jenny
// age:70
// company:Apple



