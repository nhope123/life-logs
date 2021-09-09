import React, { useContext } from 'react'
import Modal from 'styled-react-modal'
//import styled from 'styled-components'
import { ThoughtRecordContext } from '../../contexts/ThoughtRecordContext'
import NavigationButton from './recordCreation/NavigationButton'

const StyledModal = Modal.styled`
  min-width: 90%;
  max-width: 900px;
  height: 85vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
  z-index: 1100;
`

const PreviewBlock = props =>{
  return(
    <div >
      <div >{props.title}</div>
      <div >{props.content}</div>
    </div >
  )
}

/**
 * 
 * @param {Object} props
 * @param {Boolean} props.isOpen - Show model if true
 * @param {Function}  props.callback - The callback the handles Modal closing
 * @returns 
 */
const ThoughtSubmission = (props) => {
  const {
          situation,
          emotion,
          automaticThought,
          alternateThought
        } = useContext(ThoughtRecordContext)


  const processThoughts = () =>{}

  const directionProps = {
    leftButton: { callback: ()=> props.callback(), title: 'Close Modal' },
    rightButton: { callback: ()=>processThoughts(), title: 'Submit Record' }
  }

  return (
    <StyledModal isOpen={props.isOpen} onBackgroundClick={props.callback} onEscapeKeydown={props.callback} >
      <PreviewBlock {...{title: 'Situation', content: situation}} />
      <PreviewBlock {...{title: 'Emotion', content: emotion}} />
      <PreviewBlock {...{title: 'Automatic Thought', content: automaticThought}} /> 
      <div >
        <div >{'Alternate Thought'}</div>
        <ul >
          {
            alternateThought.map(item=>{
              return <li key={item.id} >{item.thought}</li>
            })
          }
        </ul>
      </div>
      <NavigationButton {...{directionProps}} />
    </StyledModal >
  )
}

export default ThoughtSubmission
