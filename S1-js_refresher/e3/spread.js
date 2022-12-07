const testList = [1, 2, 3]

const testListTwo = [...testList, 4]

console.log(testListTwo)
console.log([testList, 4])

const testObj = {
    test1: '1',
    test2: '2',
}

const testObj2 = {
    ...testObj,
    test4: '4',
}

console.log(testObj2)
console.log({
    testObj,
    test4: '4',
})

const testObj3 = {
    ...testObj,
    test4: '4',
    test1: '85'
}

console.log(testObj3)

const myFunc = (...args) => {
    console.log(args)
}

myFunc(1, 'test', ['1', 5], 'f' , 5, 67)