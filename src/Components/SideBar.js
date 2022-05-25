import React from 'react'
import SideBarNavigation from './SideBarNavigation'
import '../App.css'

function SideBar() {
  return (
    <div className='sideBarMain'>
        <div className='sideBarFlex'>
            <div className='searchContainer'>
                <img className='searchIcon' src='/Images/search.svg' alt='Search Icon'/>
                <input className='searchInput' type="text" id="search" name="search" placeholder='Search'/>
            </div>
            <div>
                <SideBarNavigation/>
            </div>
            <div className='socials'>
                <p><a href="https://www.instagram.com/solentuniversity/" target='_blank' rel='noopener noreferrer'>
                    <img src="/Images/instagramIcon.svg" alt="Solent University Instagram Link"/>
                </a></p>
                <p><a href="https://www.facebook.com/SolentUniversity" target='_blank' rel='noopener noreferrer'>
                    <img src="/Images/facebookIcon.svg" alt="Solent University Facebook Link"/>
                </a></p>
            </div>
        </div>
    </div>
  )
}

export default SideBar