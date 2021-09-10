import React from 'react'
import { List, Safe } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Menu from './auxiliary/Menu'

const Navbar = () => {
  return (
    <header >
      <nav >
        {/* Company name and logo */}
        <Link to={'/'} >
          <div className={'company'} title={'Go To Home page'}>            
            <Safe className={'logo'} aria-label={'colored security safe'} />
            <span >{'Life Logs'}</span>            
          </div>
        </Link>
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
