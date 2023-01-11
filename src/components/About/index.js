import './index.scss';
import { useEffect, useState } from "react";
import  AnimatedLatters  from "../AnimatedLatters";
const About = () => {
        const [letterClass, setLetterClass] = useState('text-animate');

        useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLatters strArray={['A','b','o','u','t',' ','m','e']} index={15} letterClass={letterClass}/>
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
        </div>
    )
}

export default About;