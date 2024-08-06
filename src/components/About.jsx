import React from "react";
import fsd3 from "../assets/about.png"; 
import './css/about.css'
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative content">
            <h1 style={{marginLeft: '20%'}}>Know Who <span style={{color:'#6F42C1'}}>I'M</span></h1>
            <p style={{  fontSize: '1.5rem' , marginRight: '40px' }}>
            Hi Everyone, I am <span style={{color:'#6F42C1'}}>Balasivam </span>
            from <span className="purple"> Sivaganga, India.</span>
            <br />
            I Recently Finished MERN Stack Development Course at GUVI, IIT-M Research Park, Chennai.
            <br />
            I have completed B.Tech Food Processing and Engineering at Karunya University, Coimbatore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul  style={{fontSize: "1.25rem",listStyleType:'square'}}>
              <li>
                Writing and Reading Stories
              </li>
              <li>
                Playing Games
              </li>
              <li>
                Playing Cricket
              </li>
          </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img src={fsd3} alt="About" width={'100%'} height={'100%'} style={{position: 'relative',top:'5rem', left:'2rem'}}/>
        </div>
      </div>
    </div>
  );
};

export default About;
