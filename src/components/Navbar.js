import React from 'react'
import { List, Safe } from 'react-bootstrap-icons'

const Navbar = () => {
  return (
    <header >
      <nav >
        {/* Company name and logo */}
        <div className={'company'}>
          <Safe className={'logo'} aria-label={'colored security safe'} />
          <span >{'Life Logs'}</span>
        </div>
        {/* Navigation */}
        <div className={'menu'} >
          <button tabIndex={'0'} type={'button'} >
            <List className={'menu-icon'} aria-label={'white hamburger dropdown menu'} />
          </button>
          <ul >
            <li >{'Home'}</li>
            <li >{'Thoughts'}</li>
          </ul>
        </div >
      </nav>
    </header>
  )
}

export default Navbar
