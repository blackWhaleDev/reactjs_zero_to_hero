class Human{
    constructor(){
        this.gender = 'man'
    }

    whatIsTheGender (){
        console.log(this.gender)
    }
}

class People extends Human{
    constructor(){
        super()
        this.age = 29
    }

    howOldAreYou (){
        console.log(this.age)
    }
}

const myObj = new People();
myObj.howOldAreYou()
myObj.whatIsTheGender()