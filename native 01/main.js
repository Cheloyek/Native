// users => copy users => change copy => use copy users with changes


comst user = {
    name: "Bob",
    age: 26
}

const user2 = user // ссылка на объект user, изменение user2 поменяет user

user2.name = "alex"
console.log(user.name) // "alex"

// {}, new Object(), Object.create()

const copyUser = {} // новый объект
//copyUser.name = user.name
//copyUser.age = user.age


// 1 метод копирования
const copyUser2 = {...user} // spread оператор, создает новый объект, изменение не поменяет user

const array = [1, 2, 3]
const copyArray = [...array] // [1, 2, 3]

// 2 метод - устаревший
Object.assign()

// 3 метод - есть особенности и нагружает вычисление
JSON.stringify() -> JSON.parse()


console.log(copyUser)
console.log(copyUser === user) // false
console.log({} === {}) // false
console.log(user === user2) // true

const state = [
    {name: "Bob",
     isStudent: true
     },
    {name: "Alex",
        isStudent: true
    },
]

const copyState = [...state] // поверхностная копия

// полная копия

// const fullCopyState = [
//     {...state[0]},
//     {...state[1]},
// ]

// метод map()
// вместо каждого элемента в новый массив добавляет его копию
const fullCopyState = state.map(st => ({...st}))

// с перезаписанием свойства
//({}) - чтобы показать что нужно return
const fullCopyStateStudent = state.map(st => ({...st, isStudent: {...st.isStudent}}))

// копия массива с изменением одного объекта
// id === 3, change "Ann" => "Anne"
// если id !== 3 => возращает существующий объект :st
// {...st} - возьмет объект с id === 3
const copyStateArray = state.map(st => { st.id === 3 ? {...st, name: "Anne"} : st})

const copyUserDeleteId = {...user}
delete copyUserDeleteId.id // удаляет id из объекта
