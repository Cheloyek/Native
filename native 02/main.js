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

const getNames = (arr) => {
    const result = []
    const getNewValue = (el) => el.name // берем каждый объект и берем name
    for (i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i]) // создает элемент нового массива
        result[i] = newValue //добавляет элемент в массив
    }
    return result
}

console.log(getNames(students))

// ["Bob, 22 yo, 85 scores, ...]
// 1. Взять каждый элемент исходного массива
// 2. Получить из него новое значение
// 3. Поместить значение в новый массив

const getData = (arr) => {
    const result = []
    const getNewValue = (el) => `${el.name}, ${el.age} yo, ${el.scores} scores`
    for (i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
}