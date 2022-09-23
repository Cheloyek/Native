const students = [
    {id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
    },
    {id: 2,
        name: "Alex",
        age: 20,
        isMarried: true,
        scores: 89
    },
    {id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
]

// нужно получить массив ["Bob", "Alex", "Nick", "John"]
// 1. Взять каждый элемент исходного массива
// 2. Получить из него новое значение
// 3. Поместить значение в новый массив

// const getNames = (arr) => {
//     const result = []
//     const getNewValue = (el) => el.name // берем каждый объект и берем name
//     for (i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i]) // создает элемент нового массива
//         result[i] = newValue //добавляет элемент в массив
//     }
//     return result
// }

// ["Bob, 22 yo, 85 scores, ...]
// 1. Взять каждый элемент исходного массива
// 2. Получить из него новое значение
// 3. Поместить значение в новый массив

// const getData = (arr) => {
//     const result = []
//     const getNewValue = (el) => `${el.name}, ${el.age} yo, ${el.scores} scores`
//     for (i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return result
// }


//=.map
const easyMap = (arr, fn) => {
    const result = []
    for (i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result
}

// not .map
console.log(easyMap(students, (el) => el.name))
console.log(easyMap(students, (el) => `${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(easyMap(students,(el) => el.scores))

// with .map
console.log(students.map ((el) => el.name))
console.log(students.map ((el) => `${el.name}, ${el.age} yo, ${el.scores} scores`))
console.log(students.map ((el)=> el.scores))

// console.log(students.map((el => el.name)))
// console.log(students.map((el) => `${el.name}, ${el.age} yo, ${el.scores} scores`))
// console.log(students.map((el) => el.scores))


const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true){
            result.push(arr[i])
        }
    }
    return result
}

console.log(easyFilter(students, el => el.scores >= 100))

//easyFilter фильтрует массив .filter

const easyFilterId = (students.filter((el) => el.id >= 3))
const easyFilterScores = (students.filter((el) => el.scores >= 100))
console.log(easyFilterId)
console.log(easyFilterScores)

// находит только 1 значение
const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true){
            return arr[i]
        }
    }
    return result
}

console.log(easyFind(students, el => el.scores === 100))
console.log(students.find(el => el.scores === 100))
