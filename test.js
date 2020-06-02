const { next } = require('.')
const { convert, toDays, toLowercase, toUppercase } = require('./convert')

const dates = convert(next(3), toDays) 
console.log(dates)

const lowercaseDates = convert(dates, toLowercase)
console.log(lowercaseDates)

const chainedDates = convert(next(3), toDays, toUppercase) 
console.log(chainedDates)