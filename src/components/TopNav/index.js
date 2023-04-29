import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

function TopNav() {
    const [ pageTitle, setPageTitle ] = useState('')
    const [ visibleTitle, setVisibleTitle ] = useState(false)
    const navigate = useNavigate()

    const updatePageTitle = ({title, route, visible}) => {
        setPageTitle(title)
        navigate(route)
        setVisibleTitle(visible)
    }

    return (
      <div className='nav-wrapper'>
        <div className='work-in-progress'>SITE WORK IN PROGRESS</div>
        <div className='nav-container'>
          <div className='nav-button' onClick={() => updatePageTitle({title: '', route: '/home', visible: false})}>Home</div>
          <div className='nav-button' onClick={() => updatePageTitle({title: 'About Me', route: '/about', visible: true})}>About Me</div>
          <div className='nav-button' onClick={() => updatePageTitle({title: 'Services', route: '/services', visible: true})}>Services</div>
          <div className='nav-button' onClick={() => updatePageTitle({title: 'Schedule Meet + Greet', route: '/contact', visible: true})}>Contact Me</div>
        </div>
        {visibleTitle && <div className='page-title'>{pageTitle}</div>}
      </div>
    )
}

export default TopNav