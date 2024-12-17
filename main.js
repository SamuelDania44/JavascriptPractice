// // data types in javascript
// //  Strings is a sequence of characters usually written in quotations
// // examples of strings includes 'Samuel', I love programming'
// // Number e.g 5,79 floats have decimals like 9.8, 43.78
// // booleans its just true or false
// // null no value
// // undefined
const sentence = 'My name is Samuel'
console.log(sentence)
// // indexing 
const word = 'programming'
console.log(word[0])
// console.log(word[3])
// console.log(word[7])
console.log(word[10])
// // slicing
// word.slice(0, 3)
// console.log(word.slice(0, 3))
console.log(word.slice(3, 7))
// // lenght2

// console.log(word.length)
// console.log(sentence.length)
// console.log(word.indexOf('i'))
// // 
// const email = prompt('Enter your email:')
// console.log(email)
// const emailProvider = email.slice(email.indexOf('@') + 1, email.length - 4)
// console.log(emailProvider)
// // Write a program to receive input from a user2 and display the inp2ut cut to 80 characters at the most.
// 22const userComment = prompt('Enter the comment')
// console.log(userComment.slice(0, 81))
// // concatenation of strings
console.log('my love ' + 'is good')
console.log('my game ' + 'is good')

console.log(word.split('a'))
console.log(word.split('m'))
console.log(word.split(''))
console.log(sentence.split(' '))
const names = 'Bisi,Ali,Obi'
console.log(names.split(','))
const splittedNames = names.split(',')
console.log(splittedNames)
const joinedNames = splittedNames.join(',')
console.log(joinedNames)
//  includes checks if a substring is present in a string and returns a boolean - true or false
console.log(sentence.includes('John'))
// upper  and lower case
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(typeof word)
console.log(typeof 35)
// Number
console.log(45 + 34)
console.log(45 + '34')
const add = 45 + '34'
console.log(typeof add)
console.log(56 + Number('74'))
console.log(Number('Great'))
// math object
console.log(Math.random())
// Math round
console.log(Math.round(5.3578))
let numb = Math.random()

// Math.ceil() rounds to the next integer
console.log(Math.ceil(5.3578))

//  Math.floor() round down
console.log(Math.floor(5.7578))
console.log(Math.round(Math.random()))

//  ASsignment
//  Write a program to give random numbers between 1 and 6 just like a dice game.
console.log(Math.floor(Math.random() * 6) + 1)
let numbs = Math.random
let numb1 = '134abc'
console.log(typeof numb1)
let numb3 = parseInt(numb1)
let numb4 = parseFloat(numb1)
console.log(typeof numb3)
console.log(numb4)
const numb5 = 69
numb5.toString()
console.log(typeof numb5.toString())
// isNaN checks if its not a number 

console.log(isNaN(146))
// assigment
// write a program to receive the year of birth of a person and calculate his/her age
// use 

const birthYear = prompt('birthYear')

const birthYear1 = parseInt(birthYear)

const currentYear = 2024
const dateBirth = (currentYear - birthYear)
console.log(dateBirth)




