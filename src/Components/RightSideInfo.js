import React from 'react'
import '../App.css'

function RightSideInfo() {
  return (
    <div className='rightSideInfoMain'>
        <div className='mustRead'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
                <p>Must-read</p>
            </div>
        </div>
        <div className='mustReadBorder'>
                
        </div>
        <ul className='mustReadList'>
            <li><a href='/'>Please read the rules before using the <br/>platforn</a></li>
        </ul>

        <div className='featuredLinks'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8_299)">
                    <path d="M7.5 9.75004C7.82209 10.1806 8.23302 10.5369 8.70491 10.7947C9.17681 11.0526 9.69863 11.2059 10.235 11.2443C10.7713 11.2827 11.3097 11.2053 11.8135 11.0174C12.3173 10.8294 12.7748 10.5353 13.155 10.155L15.405 7.90504C16.0881 7.19778 16.4661 6.25052 16.4575 5.26728C16.449 4.28404 16.0546 3.3435 15.3593 2.64822C14.664 1.95294 13.7235 1.55855 12.7403 1.55001C11.757 1.54146 10.8098 1.91944 10.1025 2.60254L8.8125 3.88504" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 8.25003C10.1779 7.81944 9.76698 7.46314 9.29509 7.20533C8.82319 6.94751 8.30137 6.79419 7.76501 6.75578C7.22865 6.71737 6.69031 6.79476 6.18649 6.9827C5.68267 7.17063 5.22516 7.46473 4.845 7.84503L2.595 10.095C1.9119 10.8023 1.53393 11.7495 1.54247 12.7328C1.55101 13.716 1.9454 14.6566 2.64068 15.3519C3.33596 16.0471 4.27651 16.4415 5.25974 16.4501C6.24298 16.4586 7.19024 16.0806 7.8975 15.3975L9.18 14.115" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_8_299">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <div>
                <p>Featured Links</p>
            </div>
        </div>
        <div className='featuredLinksBorder'>
            
        </div>
        <ul className='featuredLinksList'>
            <li><a href='/'>Javascript best-practices</a></li>
            <li><a href='/'>Game Design Technologies</a></li>
            <li><a href='/'>Best Animation Tools</a></li>
        </ul>
    </div>
  )
}

export default RightSideInfo