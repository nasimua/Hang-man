import React from 'react'
// import images that will be used
import state4 from '../imgs/state4.GIF'
import state5 from '../imgs/state5.GIF'
import state6 from '../imgs/state6.GIF'
import state7 from '../imgs/state7.GIF'
import state8 from '../imgs/state8.GIF'
import state9 from '../imgs/state9.GIF'
import state10 from '../imgs/state10.gif'
import state11 from '../imgs/state11.GIF'


const Figure = ({incorrectLetters}) => {

  // set variable with length of incorrectLetters
  const errors = incorrectLetters.length;

  return (
    <div className='figure-container'>
      {/* display image according to how many wrong letters have been chosen */}
        {/* base */}
        {errors === 0 &&<img src={state4} />}
        {/* rope */}
        {errors > 0 && errors < 2 && <img src={state5} />}
        {/* head */}
        {errors > 1 && errors < 3 && <img src={state6} />}
        {/* body */}
        {errors > 2 && errors < 4 && <img src={state7} />}
        {/* arms */}
        {errors > 3 && errors < 5 && <img src={state8} />}
        {errors > 4 && errors < 6 && <img src={state9} />}
        {/* legs */}
        {errors > 5 && errors < 7 && <img src={state10} />}
        {errors > 6 && <img src={state11} />}
    </div>
  )
}

export default Figure
