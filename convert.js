const { format } = require('date-fns/fp')

const reducer = (obj, fn) => obj.map(fn)

const convert = (obj, ...fns) => {
    if (Array.isArray(obj))
        return fns.reduce(reducer, obj)
    return fns.reduce(reducer, [obj])[0]
}

const toLowercase = str => str.toLowerCase()
const toUppercase = str => str.toUpperCase()

const toDay = format('ccc') 
const toDays = toDay
const toLongDay = format('cccc')
const toLongDays = toLongDay

const toMilliseconds = date => date.getTime()

module.exports = {
    convert,
    to: format,
    toDay,
    toDays,
    toLongDay,
    toLongDays,
    toLowercase,
    toUppercase,
    toMilliseconds,
}
