import './index.scss'
import logoB from '../../../assets/images/logo-b.png'
import { useEffect,useRef } from "react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef  = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline().to(bgRef.current, {
            duration: 1,
            opacity: 1,
        }).from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })
        
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    },[])
    
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} src={logoB} className="solid-logo" alt="S" />
            <svg
                width="500.000000pt" height="809.000000pt" viewBox="0 0 500.000000 809.000000"
                preserveAspectRatio="xMidYMid meet">

                <g ref={outlineLogoRef} className="svg-container" transform="translate(0.000000,809.000000) scale(0.100000,-0.100000)"
                    fill="none">
                </g>
                
            </svg>   

        
        </div>
    )
}

export default Logo;