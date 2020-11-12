import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import profilepic from '../assets/profile.png';

function About() {
    const pageHeader = [{ pageTitle: "About Me", pageSub:"Graphic Designer | Web Developer"}];

    return (
        <>
        <Jumbotron header={pageHeader}/>

        <div className="container contentFlex" role="main">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={profilepic} className="about-img" style={{width: "100%"}} alt="It me, dongyell varelli"/>
                        </div>
                        <div className="col-md-6" id="aboutme">
                            <h3>Danielle Varela</h3><br /><p>Graphic Designer, illustrator, novice scuba diver and local menace. Likes sushi, raising chickens, and this one real cool dude called "husband".</p>
                        </div>
                    </div>
                </div>  

                <div className="col-md-4">
                    <aside id="contact-info">
                        <h3>Contact Me</h3>
                        <br />
                        <ul>
                            <li><strong>Email:</strong> legacyofthedonut@gmail.com</li>
                            <li><strong>Github:</strong> <a href="https://github.com/CptSpooky" target="blank">CptSpooky</a></li>
                            <li><strong>Portfolio:</strong> <a href="https://daniellevarela.squarespace.com/" target="blank">Graphic Design</a></li>
                            <li><strong>Resume:</strong> <a href="https://tinyurl.com/yxgsopd6" target="blank">https://tinyurl.com/yxgsopd6</a></li>
                        </ul>
                    </aside>
                </div>
            </div> 
        </div> 
        <Footer />
        </>
    );
}

export default About;