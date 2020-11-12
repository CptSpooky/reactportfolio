import React from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';




export default function Footer() {
    return (
        <footer>
            <div className="row">
            <div className="col-md-6 col-sm-6 flexStart"> 
                <p className="margin0">&copy; 2020 Danielle Varela</p>
            </div>
            <div className="col-md-6 col-sm-6 flexEnd"> 
                <a href="https://github.com/CptSpooky" target="blank" className="socialIcons"><img src={Github} style={{ height:"20px", width:"20px"}} alt="github"/></a>
                <a href="https://www.linkedin.com/in/daniellevarela/" target="blank" className="socialIcons"><img src={Linkedin} style={{ height:"20px", width:"20px", marginLeft:"10px"}} alt="LinkedIn"/></a>
            </div>
            </div>
        </footer>
    )
}