import React from 'react'
import '../App.css'
import PostButtons from './PostButtons'

function PostCard() {
  return (
    <div className='postCardMain'>
        <div className='postCard'>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <img src={process.env.PUBLIC_URL + '/Images/Dimitry.jpg'} alt='Poster profile'/>
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>Dimitry</p>
                        <p className='timePosted'>5 min ago</p>
                    </div>
                </div>
                <div className='cardSettings'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
            
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>What are some of the javascript best-practices?</p>
                </div>
                <div className='cardQuestion'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>javascript</p>
                    </div>
                    <div className='tag'>
                        <p>bestpractices</p>
                    </div>
                    <div className='tag'>
                        <p>computerscience</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>
        <div className='postCard'>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <img src={process.env.PUBLIC_URL + '/Images/Dimitry.jpg'} alt='Poster profile'/>
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>Dimitry</p>
                        <p className='timePosted'>5 min ago</p>
                    </div>
                </div>
                <div className='cardSettings'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
            
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>What are some of the javascript best-practices?</p>
                </div>
                <div className='cardQuestion'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>javascript</p>
                    </div>
                    <div className='tag'>
                        <p>bestpractices</p>
                    </div>
                    <div className='tag'>
                        <p>computerscience</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>
        <div className='postCard'>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <img src={process.env.PUBLIC_URL + '/Images/Dimitry.jpg'} alt='Poster profile'/>
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>Dimitry</p>
                        <p className='timePosted'>5 min ago</p>
                    </div>
                </div>
                <div className='cardSettings'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
            
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>What are some of the javascript best-practices?</p>
                </div>
                <div className='cardQuestion'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>javascript</p>
                    </div>
                    <div className='tag'>
                        <p>bestpractices</p>
                    </div>
                    <div className='tag'>
                        <p>computerscience</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>
        <div className='postCard'>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <img src={process.env.PUBLIC_URL + '/Images/Dimitry.jpg'} alt='Poster profile'/>
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>Dimitry</p>
                        <p className='timePosted'>5 min ago</p>
                    </div>
                </div>
                <div className='cardSettings'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
            
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>What are some of the javascript best-practices?</p>
                </div>
                <div className='cardQuestion'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>javascript</p>
                    </div>
                    <div className='tag'>
                        <p>bestpractices</p>
                    </div>
                    <div className='tag'>
                        <p>computerscience</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>
        <div className='postCard'>
            <div className='cardHeader'>
                <div className='cardPoster'>
                    <div className='cardPosterImage'>
                        <img src={process.env.PUBLIC_URL + '/Images/Dimitry.jpg'} alt='Poster profile'/>
                    </div>
                    <div className='cardPosterName'>
                        <p className='posterName'>Dimitry</p>
                        <p className='timePosted'>5 min ago</p>
                    </div>
                </div>
                <div className='cardSettings'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
            
            </div>
            <div className='cardMainInfo'>
                <div className='cardTitle'>
                    <p>What are some of the javascript best-practices?</p>
                </div>
                <div className='cardQuestion'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardTags'>
                    <div className='tag'>
                        <p>javascript</p>
                    </div>
                    <div className='tag'>
                        <p>bestpractices</p>
                    </div>
                    <div className='tag'>
                        <p>computerscience</p>
                    </div>
                </div>
                    <PostButtons/>
            </div>
        </div>
    </div>
    
  )
}

export default PostCard