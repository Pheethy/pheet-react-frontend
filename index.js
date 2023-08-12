const product1 = {
    id: "P000001",
    name: "Ethiopia",
    grade: 0,
    age: 20,
    walk: () => {
        console.log("walking....")
    }
}
const product2 = null
const product3 = undefined
const product4 = ["JAVA", "C#", "REACT"]

console.log("product1: ", product1.grade || "N/A") //or
console.log("product1: ", product1.grade ?? "N/A") //nullish coaleasing
console.log("product3: ", product3?.grade) //optional chaining

// Destructuring
const {name, grade} = product1 
console.log(name, grade)
const [java, cshape, react] = product4
console.log(java, cshape, react)

// Arrow Function
function Add(a, b) {
    return a + b
}
const result = Add(1, 2)
console.log(result)

const Add2 = (a, b) => {
    return a + b
}
const result2 = Add2(1, 3)
console.log(result2)

const getAge = ({ age }) => age
const age = getAge(product1)
console.log("test GetAge: ",age)

// Method
product1.walk()