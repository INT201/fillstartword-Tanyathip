const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

  if(word == null) {
      console.log("undefined")
      return undefined
  }
  else if(word == undefined) {
      console.log("undefined")
      return undefined
  }
  else if (word.includes(startWord)) {
      console.log(word)
      return word
  }
  else  {
      // console.log(word=startWord+word)
      return word=startWord+word

  }    
}
module.exports = fillStartWord
