
// Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
// const repeatString = (string, repeatNumber, sep) => {
//     const resultString = (`${string}${sep}`).repeat(repeatNumber)
//     return resultString
// }
// console.log(repeatString('good', 5, ' ')) // 'good good good good good'
// console.log(repeatString('good', 5, ', ')) //'good, good, good, good, good,'

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

// const checkStart = (string, startString) => {
//     return string.toLowerCase().startsWith(startString.toLowerCase())
// }
// const checkStartWithSlice = (string, startString) => {
//     const sliceString = string.slice(0, startString.length)
//     return sliceString.toLowerCase() === startString.toLowerCase()
// }
// const checkStartWithIndexOf = (string, startString) => {
//     console.log(string.toLowerCase().indexOf(startString.toLowerCase()) !== -1)
// }
//
// console.log('startWith():' + checkStart("Incubator", "inc"))
// console.log('startWith():' + checkStart("Incubator", "yo"))
// console.log('slice:' + checkStartWithSlice("Incubator", "inc"))
// console.log('slice:' + checkStartWithSlice("Incubator", "yo"))
// console.log('indexOF:' + checkStartWithIndexOf("Incubator", "inc"))
// console.log('indexOF:' + checkStartWithIndexOf("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

// const truncateString = (string, number) => {
//     return `${string.slice(0, number)}...`
// }
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// split()

// const getMinLengthWord = (string) => {
//     const stringReplace = string.replace('!', '')
//     const splitString = string.split(' ') // разбивает строку на массив
//     // const mapString = splitString.map( el => el.length)
//     const sortString = splitString.sort((a, b) => a.length > b.length ? 1 : -1)
//     console.log(sortString)
//
//     // console.log(typeof splitString[0])
//     if (sortString[0] === '!' || sortString[0] === '' ) {
//         console.log('null')
//         return 'nsdsull'
//     } else{
//         console.log(sortString[0])
//         return sortString[0]
//     }
// }
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи !"))
// console.log(getMinLengthWord(123))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// const setUpperCase = (string) => {
//     const a = string.toLowerCase().split(' ')
//     let arrayResult = []
//     for (let i = 0; i< a.length; i++) {
//         let splitted = a[i].split('') // делит каждое слово на буквы
//         let first = splitted[0].toUpperCase() // первую букву каждого слова - toUpperCase
//         const rest = [...splitted] // копируем массив букв слова
//         rest.splice(0, 1) // удаляет первую букву массива
//         const result = [first, ...rest].join('') // соединяет заглавную и все буквы кроме в строку
//         console.log(result)
//         arrayResult.push(result) // добавляет слово в массив
//
//     }
//     const stringResult = arrayResult.join(' ') // превращает сформированный массив слов в строку
//     console.log(arrayResult)
//     console.log(stringResult)

// }
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (string1, string2) => {
    const result = []
    const toLowerString1 = string1.toLowerCase()
    const toLowerString2 = string2.toLowerCase()
    const arrayWordsString2 = toLowerString2.split('')
    for (i = 0; i < string2.length; i++) {
        if (toLowerString1.includes(arrayWordsString2[i])) {
            result.push(+'0')
        } else {
            result.push(+'1')
        }
    }
    sum = result.reduce((acc, cur) => acc + cur, 0)
    if (sum === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
    console.log(arrayWordsString2)
    console.log(result)
    console.log(sum)
}

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Cut")
// isIncludes("Incubator", "table")
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false




