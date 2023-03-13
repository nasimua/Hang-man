import React from 'react'

// pass selectedWord and correctLetters to Word component
function Word({selectedWord, correctLetters}) {
  return (
    <div className='word'>
        {/* split selected word */}
        {selectedWord.split('').map((letter, i) => {
            return (
                // use i as key for map
                <span className='letter' key={i}>
                    {/* if correctLetters array includes letter, display the letter, or else display and empty string */}
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
            )
        })}
    </div>
  )
}

export default Word