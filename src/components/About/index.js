import './index.scss';
import { useEffect, useState } from "react";
import  AnimatedLetters  from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
const About = () => {
        const [letterClass, setLetterClass] = useState('text-animate');

        useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} index={15} letterClass={letterClass}/>
                </h1>   
                
                <p>I am Oumehdi Bilal, a sofware engineer student at school national of applied science </p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis sequi cum, inventore officia pariatur temporibus quae ex 
                    Nulla, praesentium dignissimos! Nostrum 
                    recusandae, quasi itaque repellat fugit mollitia,
                </p>
                
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Praesentium suscipit 
                    doloribus dolorum dignissimos veritatis 
                    mollitia, tempore nobis voluptates 
                    doloremque, esse modi temporibus excepturi
                    quidem 
                    labore amet ipsam, iure sint officia?</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact}  color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5}  color="#F06529" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faCss3}  color="#28A4D9" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare}  color="#EFD81D" />
                    </div>
                    <div className="face7">
                        <FontAwesomeIcon icon={faGitAlt}  color="#DD0031" />
                    </div>
                </div>

            </div>

        </div>
            <Loader type='cube-transition'/>
        </>
    )
}

export default About;