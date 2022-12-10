//>> Destructuring

const [a, b] = ['ali', 'asghar']

const {age, name} = {name: 'sara', age: 21, test: 'mamad'}

console.log(b)
console.log(a)
console.log(age)
console.log(name)

// >> Primitive types
const a = 1
const b = a
console.log(b)
console.log(a === b)
////
const testObj = {name: 'choghondar'}
const test2Obj = testObj
const obj3 = {
    ...testObj
}
console.log(test2Obj)
console.log(test2Obj === testObj)
testObj.name = 'sibzamini'

console.log(test2Obj)
console.log(obj3)

const test3Obj = {name: 'choghondar'}
console.log(test3Obj === testObj)

//>> array/obj functions

const arr = ['test', 1, 'abbas']
arr.map((arrayItem) => {
    console.log(arrayItem)
})


const obj = {
    name: 'ali',
    age: 30
}

const keys = Object.keys(obj)

const values = Object.values(obj)

console.log(keys)
console.log(values)

