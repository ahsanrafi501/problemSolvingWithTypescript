// Problem 1
const filterEvenNumbers = (arr: number[]):number[] => {
    return arr.filter(arr => arr % 2 == 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



// Problem 2
const reverseString = (str: string):string =>{
    return str.split('').reverse().join("")
}
console.log(reverseString("typescript"))




// problem 3
type StringOrNumber = number | string;

const checkType = (params: StringOrNumber): string =>{
    if(typeof params === 'number'){
        return "Number"
    }
    return "String"
}

console.log(checkType("rafi"))
console.log(checkType(29))




// problem 4
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
console.log(toggleReadStatus(myBook))



// problem 5

