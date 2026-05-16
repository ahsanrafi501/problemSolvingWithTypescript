// Problem 1
const filterEvenNumbers = (arr: number[]):number[] => {
    return arr.filter(arr => arr % 2 === 0);
}



// Problem 2
const reverseString = (str: string):string =>{
    return str.split('').reverse().join("")
}




// problem 3
type StringOrNumber = number | string;

const checkType = (params: StringOrNumber): string =>{
    if(typeof params === 'number'){
        return "Number"
    }
    return "String"
}





// problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] =>{
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 }





// problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number
}

interface BookWithReadStatus extends Book {
    isRead: boolean
}

const toggleReadStatus = (params: Book): BookWithReadStatus => {
    return {
        ...params,
        isRead: true
    }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };



// problem 6
class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    public grade: string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");



// problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(element=> arr2.includes(element))
}
