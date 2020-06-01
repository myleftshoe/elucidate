<b>lapidate (meaning):</b>

1. to pelt with stones
2. to kill by stoning

Stone your js dates to death with functions!

examples:

```js
const { next } = require('lapidate')
const { convert, toDays, toLowerCase } = require('lapidate/convert')

// get next 4 dates from today, convert to short day names then to lower case
convert(next(4), toDays, toLowerCase)) // => [ 'sun', 'mon', 'tue', 'wed' ]
convert(new Date(), toDays, toLowerCase)) // => 'sun'

```
