import React, { useContext } from 'react'
import sad from '../../../assets/images/sad-emoji.png'
import afraid from '../../../assets/images/afraid-emoji.png'
import angry from '../../../assets/images/angry-emoji.png'
import disgust from '../../../assets/images/disgust-emoji.png'
import happy from '../../../assets/images/happy-emoji.png'
import surprise from '../../../assets/images/surprise-emoji.png'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import NavigationButton from './NavigationButton'

const choices = [
  {src: sad, alt: 'round yellow face emoji with dark blue eyes and a frown' , title:'Feeling Sad' },
  {src: afraid , alt: 'round face emoji with blue top half, yellow bottom half furrowed brow with dark blue eyes and scared mouth expression' , title: 'Feeling Afraid' },
  {src: angry , alt: 'round yellow face emoji with tightly knitted brows, dark blue eyes, open mouth and grinding teeth' , title: 'Feeling Angry' },
  {src: disgust, alt: 'round face emoji with green top half, yellow-orange bottom half, tightly knitted brows, with dark blue eyes small mouth and puffy cheeks', title: 'Feeling Disgusted' },
  {src: happy , alt: 'round yellow face emoji with dark blue eyes and a wide smile with white  top layer teeth' , title: 'Feeling Happy' },
  {src: surprise , alt: 'round yellow face emoji with mouth open in a circle, wide open white  eyes and dark blue eyes iris' , title: 'Feeling Surprised' },
]

const Emotions = () => {
  const {setEmotion} = useContext(ThoughtRecordContext)
  const directionProps ={
    leftButton: {
      callback: null,
      title: 'Go Back to Situation'
    },
    rightButton: {
      callback: null,
      title: 'Go Automatic Thought',
    }
  }
  

  return (
    <section >
      <div >
        <p >{'Select the emotion which best represent your strongest emotion.'}</p>
      </div>
      {/* emoji choices */}
      <div >
        {
          choices.map(object =>{
            return (
              <span key={object.title} tabIndex={'0'} title={object.title} 
                    onClick={()=>setEmotion(object.title)} >
                <img src={object.src} alt={object.alt}  />
              </span>
            )
          })
        }
      </div>
      {/* Navigation buttons */}
      <NavigationButton {...directionProps} />      
    </section >
  )
}

export default Emotions
