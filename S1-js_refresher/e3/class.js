class Human{
    gender = 'man'

    whatIsTheGender = () => {
        console.log(this.gender)
    }
}

class People extends Human{
    age = 29

    howOldAreYou = () => {
        console.log(this.age)
    }
}

const myObj = new People();
myObj.howOldAreYou()
myObj.whatIsTheGender()