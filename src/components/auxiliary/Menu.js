import React from 'react'
import { NavLink } from 'react-router-dom'

const horizontalActive={
  color: '#2196f3',
  backgroundColor: 'white',
  borderRadius: '5px',
  paddingTop: '5px'
  }

const verticalActive = {
  backgroundColor: 'white'
}

const Menu = (props) => {
  const layout = (props.menu === 'dropdown')? {ul: 'vertical-menu',style: verticalActive} : 
                                              {ul: 'horizontal-menu',style: horizontalActive} 
  return (
    <ul className={ layout.ul} >
      <NavLink to={'/'} exact activeStyle={layout.style} >
        <li >{'Home'}</li>
      </NavLink>
      <NavLink to={'/thought-record'} exact activeStyle={layout.style} >
        <li >{'Thoughts'}</li>
      </NavLink>
    </ul>
  )
}

export default Menu
