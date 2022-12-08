 const pombify = (phrase) => {
   return phrase
     .split(' ')
     .map((word) => {
       const wordLetters = word.split('')
       return wordLetters
         .map((letter, index) => {
           const charCode = letter.charCodeAt(0);
           const binary = charCode
             .toString(2)
             .padStart(8, 0)

           const prus = binary
             .replace(/0/g, 'pru, ')
             .replace(/1/g, 'pru pru, ')
             .replace(/, $/, '')

           return prus
         })
         .join('-')
     })
     .join('~')
 }

 const despombify = (prurase) => {
   return prurase
     .split('~')
     .map((word) => {
       return word
       	.split('-')
        .map((letter) => {
           const binary = letter
             .replace(/pru pru(, )*/g, '1')
             .replace(/pru(, )*/g, '0')

           return String.fromCharCode(parseInt(binary, 2))
         })
         .join('')
     })
     .join(' ')
 }
 