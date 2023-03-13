import React from 'react'

// create a function component taht will display wrong letters
// pass incorrectLetters as props
const WrongLetters = ({incorrectLetters}) => {
  return (
    <div className='wrong-letters-container'>
        <div className='wrong-letters'>
          {/* check if length of incorrectLettersis more than 0
          print to webpage if it is, keep blank if not */}
          {incorrectLetters.length > 0  && <p>Wrong</p>}
          {incorrectLetters
          // map each letter and create a span for each letter with i as the key
          .map((letter, i) => <span key={i}>{letter}</span>)
          // add a comma between each span using .reduce()
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
    </div>
  )
}

export default WrongLetters