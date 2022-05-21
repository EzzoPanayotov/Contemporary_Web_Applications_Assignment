import React from 'react'
import '../App.css'

function SideBar() {
  return (
    <div className='sideBarMain'>
        <div className='sideBarFlex'>
            <div className='searchContainer'>
                <img className='searchIcon' src='/Images/search.svg' alt='Search Icon'/>
                <input className='searchInput' type="text" id="search" name="search" placeholder='Search'/>
            </div>
            <div className='menu'>
                <p className='menu-paragraph'>Menu</p>
                <button className='questionsBtn'>
                    <img className='questionsIcon' 
                    src={process.env.PUBLIC_URL + '/Images/questionsIcon.svg'} 
                    alt='Icon representing the questions button'/>
                    Questions
                </button>
                <button className='tagsBtn'>
                    <span className='tagsIconAndTextContainer'>
                    <img className='tagsIcon' 
                    src={process.env.PUBLIC_URL + '/Images/tagsIcon.svg'} 
                    alt='Icon representing the tags button'/>
                    Tags
                    </span>
                    <img className='arrowVector' 
                    src={process.env.PUBLIC_URL + '/Images/arrowVector.svg'} 
                    alt='Icon that indicates that this is a drop-down menu '/>
                </button>
            </div>
            <div className='socials'>
                <p><a href="https://www.instagram.com/solentuniversity/">
                    <img src="/Images/instagramIcon.svg" alt="Solent University Instagram Link"/>
                </a></p>
                <p><a href="https://www.facebook.com/SolentUniversity">
                    <img src="/Images/facebookIcon.svg" alt="Solent University Facebook Link"/>
                </a></p>
            </div>
        </div>
    </div>
  )
}

export default SideBar