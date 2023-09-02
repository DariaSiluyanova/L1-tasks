import {changeCase} from './task-4.js'
let testWord = "112 сообщения"
let testWord2 = "12 сообщений"
let testWord3 = "1 сообщение"
let testWord4 = "1024 пользователя"
let testWord5 = "1026 пользователей"
let testWord6 = "121 пользователь"
console.log(changeCase(121, "пользователь", "пользователя", "пользователей"))
console.log(changeCase(1024, "пользователь", "пользователя", "пользователей"))
console.log(changeCase(1026, "пользователь", "пользователя", "пользователей"))