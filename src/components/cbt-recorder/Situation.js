import React, { useState } from 'react'
import { ChevronRight } from 'react-bootstrap-icons'

const Situation = () => {
  const [input, setInput] = useState('')
  return (
    <section >
      <div >
        <p >{'Enter a short sentence describing and actual event or thought that is causing\
               you emotional distress'}
        </p>
      </div>
      <div >
        <input type={'text'} tabIndex={'0'} value={input} placeholder={'Situation'} 
               onChange={event => setInput(event.target.value)}  required />
      </div>
      <div >
        <button type={'button'} tabIndex={'0'} onClick={()=>{}}  >
          {'Next'}
          <ChevronRight />
        </button>
      </div>
    </section >
  )
}

export default Situation
