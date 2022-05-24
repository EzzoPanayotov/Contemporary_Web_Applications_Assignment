const SideBarLinks = () =>{
    
    return(
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
    );
}

export default SideBarLinks