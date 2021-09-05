import React from 'react'

const Menu = (props) => {
  const layout = (props.menu === 'dropdown')? {ul: 'vertical-menu'} : {ul: 'horizontal-menu'} 
  return (
    <ul className={ layout.ul} >
      <li >{'Home'}</li>
      <li >{'Thoughts'}</li>
    </ul>
  )
}

export default Menu
