import React from 'react'
import '../App.css'

function MainContent() {
  return (
    <div className='mainContainer'>
        <div className='mainContent'>
            <div className='searchContainerMain'>
                <img className='searchIconMain' src='/Images/search.svg' alt='Search Icon'/>
                <input className='searchInputMain' type="text" id="search" name="search" placeholder='Search'/>
            </div>
            <div className='cardFilter'>
              <button className='newCards cardBtn'>
              <svg className='clockIcon cardIcon' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='clockIconPath' d="M6 11.5C8.76142 11.5 11 9.26142 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.26142 3.23858 11.5 6 11.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='clockIconPath' d="M6 3.5V6.5L8 7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                New
                </button>
              <button className='topCards cardBtn'>
              <svg className='arrowUpIcon cardIcon' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='arrowUpIconPath'd="M2.5 10L9.5 3" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='arrowUpIconPath'd="M2.5 3H9.5V10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                Top
                </button>
              <button className='hotCards cardBtn'>
              <svg className='flameIcon cardIcon' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8_125)">
                  <path className='flameIconPath' d="M6.25 12.5C5.38982 12.5 4.59435 12.2832 3.86358 11.8496C3.13281 11.416 2.55619 10.8242 2.13371 10.0742C1.71124 9.32422 1.5 8.50781 1.5 7.625C1.5 7.28125 1.54948 6.9707 1.64844 6.69336C1.7474 6.41602 1.86919 6.16797 2.01382 5.94922C2.15845 5.73047 2.30308 5.49219 2.44772 5.23438C2.59235 4.97656 2.71414 4.63672 2.8131 4.21484C2.91206 3.79297 2.96154 3.30469 2.96154 2.75C2.96154 2.82812 3.0015 2.9043 3.08143 2.97852C3.16136 3.05273 3.25651 3.12695 3.36689 3.20117C3.47726 3.27539 3.59906 3.40625 3.73227 3.59375C3.86548 3.78125 3.97396 4 4.05769 4.25C4.17949 4.63281 4.3774 4.97852 4.65144 5.28711C4.92548 5.5957 5.21474 5.75 5.51923 5.75C5.91506 5.75 6.2519 5.51953 6.52975 5.05859C6.80759 4.59766 7.01312 3.97656 7.14633 3.19531C7.27955 2.41406 7.34615 1.51562 7.34615 0.5C7.46034 0.84375 7.63542 1.20312 7.87139 1.57812C8.10737 1.95312 8.35667 2.29297 8.61929 2.59766C8.88191 2.90234 9.15785 3.25 9.44712 3.64062C9.73638 4.03125 9.99329 4.41211 10.2178 4.7832C10.4424 5.1543 10.6289 5.58789 10.7773 6.08398C10.9258 6.58008 11 7.09375 11 7.625C11 8.50781 10.7888 9.32422 10.3663 10.0742C9.94381 10.8242 9.36719 11.416 8.63642 11.8496C7.90565 12.2832 7.11018 12.5 6.25 12.5ZM7.71154 5C7.32332 6.0625 6.95793 6.8125 6.61538 7.25C6.47075 7.4375 6.28996 7.60547 6.07302 7.75391C5.85607 7.90234 5.65815 8.02148 5.47927 8.11133C5.30038 8.20117 5.1272 8.30273 4.95974 8.41602C4.79227 8.5293 4.66096 8.67383 4.56581 8.84961C4.47065 9.02539 4.42308 9.24219 4.42308 9.5C4.42308 9.97656 4.60387 10.3457 4.96544 10.6074C5.32702 10.8691 5.75521 11 6.25 11C6.98077 11 7.58974 10.8027 8.07692 10.4082C8.5641 10.0137 8.80769 9.47656 8.80769 8.79688C8.80769 8.27344 8.76583 7.82227 8.68209 7.44336C8.59836 7.06445 8.50321 6.7832 8.39663 6.59961C8.29006 6.41602 8.16827 6.18164 8.03125 5.89648C7.89423 5.61133 7.78766 5.3125 7.71154 5Z" fill="none"/>
                </g>
                <defs>
                  <clipPath id="clip0_8_125">
                    <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
                Hot
                </button>
              <button className='closedCards cardBtn'>
              <svg className='checkIcon' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8_129)">
                  <path className='checkIconPath' d="M11 6.03999V6.49999C10.9994 7.57821 10.6502 8.62733 10.0047 9.49091C9.35908 10.3545 8.45163 10.9862 7.41767 11.2919C6.38371 11.5977 5.27862 11.5609 4.26723 11.1873C3.25583 10.8136 2.39232 10.123 1.80547 9.21853C1.21863 8.31401 0.939888 7.24403 1.01083 6.16815C1.08177 5.09228 1.4986 4.06816 2.19913 3.24853C2.89967 2.4289 3.84639 1.85768 4.89809 1.62007C5.94979 1.38245 7.05013 1.49116 8.035 1.92999" stroke="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className='checkIconPath' d="M11 2.5L6 7.505L4.5 6.005" stroke="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_8_129">
                    <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>

                Closed
                </button>
            </div>
        </div>
        <div className='postCard'>
            <div className='cardHeader'>

            </div>
            <div className='cardTitle'>

            </div>
            <div className='cardQuestion'>

            </div>
            <div className='cardFooter'>
                <div className='cardTags'>

                </div>
                <div className='cardReactions'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContent