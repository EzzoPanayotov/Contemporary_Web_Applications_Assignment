import React from 'react'
import '../App.css'
function PostButtons() {
  return (
    <div className='cardReactions'>
        <div>
            <button className='seenPost postBtn'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.625 7.5C0.625 7.5 3.125 2.5 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C14.375 7.5 11.875 12.5 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 9.375C8.53553 9.375 9.375 8.53553 9.375 7.5C9.375 6.46447 8.53553 5.625 7.5 5.625C6.46447 5.625 5.625 6.46447 5.625 7.5C5.625 8.53553 6.46447 9.375 7.5 9.375Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>112</p>
            </button>
        </div>
        <div>
            <button className='postMessage postBtn'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 9.375C13.125 9.70652 12.9933 10.0245 12.7589 10.2589C12.5245 10.4933 12.2065 10.625 11.875 10.625H4.375L1.875 13.125V3.125C1.875 2.79348 2.0067 2.47554 2.24112 2.24112C2.47554 2.0067 2.79348 1.875 3.125 1.875H11.875C12.2065 1.875 12.5245 2.0067 12.7589 2.24112C12.9933 2.47554 13.125 2.79348 13.125 3.125V9.375Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>35</p>
            </button>
        </div>
        <div>
            <button className='postVoted postBtn'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 11.875V3.125" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.125 7.5L7.5 3.125L11.875 7.5" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>83</p>
            </button>
        </div>
    </div>
  )
}

export default PostButtons