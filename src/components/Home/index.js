import { Link } from 'react-router-dom'
import logoB from "../../assets/images/logo-b.png"
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLatters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['i','l','a','l',' ','O','u','m','e','h','d','i'] ;
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />  
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 

                    <img src={logoB} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} index={15} />
                    <br />

                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray} index={22} />
                </h1>
                <h2>Full Stack Developer </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}
export default Home;