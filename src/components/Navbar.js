import React from 'react'
import { List, Safe } from 'react-bootstrap-icons'
import Menu from './Menu'

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
          <span className={'menu-burger'} tabIndex={'0'}  >
            <List className={'menu-icon'} aria-label={'white hamburger dropdown menu'} />
          </span >
          <Menu menu={'dropdown'} />
          <Menu menu={'inline'} />
        </div >        
      </nav>
    </header>
  )
}

export default Navbar
