import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
const SideBarLinks = () =>{

    const { currentUser } = useAuth()
    return(
        <div className='menu'>
            <p className='menu-paragraph'>Menu</p>
            <Link to = '/'>
                <button className='questionsBtn'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4.5H15.75" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H15.75" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 13.5H15.75" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.25 4.5H2.2575" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.25 9H2.2575" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.25 13.5H2.2575" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Questions
                </button>
            </Link>
 
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
            {currentUser ? 
                <Link to = '/your-questions'>
                    <div className="personalNavigator">
                        <p className="menu-paragraph">Personal Navigator</p>
                        <button className="yourQuestionsBtn questionsBtn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.8175 6.75C6.99383 6.24875 7.34187 5.82608 7.79997 5.55685C8.25807 5.28762 8.79668 5.1892 9.32039 5.27903C9.8441 5.36886 10.3191 5.64114 10.6613 6.04765C11.0035 6.45415 11.1908 6.96864 11.19 7.5C11.19 9 8.94 9.75 8.94 9.75" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 12.75H9.0075" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Your questions
                        </button>
                    </div>
                </Link>: ''
            }
        </div>
    );
}

export default SideBarLinks