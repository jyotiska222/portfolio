import React from 'react';
import './Hero.css';
import profilepic from './profilepic.jpeg';

const Hero = () => {
  // const handleClick = () => {
  //   const email = 'your-email@example.com';
  //   const subject = 'Inquiry about your project';
  //   const body = 'Hello, I would like to discuss more about your project...';
    
  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  //   window.location.href = mailtoLink;
  // };

  return (
    <div className="hero">
      <div className="hero__container">
        <h3>Software Developer & Engineer</h3>
        <h2>Hello, I'm</h2>
        <h1>Jyotiska Biswas</h1>
        <p><b>B.Tech</b> student at <b>Kalyani Government Engineering College</b>, passionate about software development, cybersecurity & exploring my creative side through design and photography.</p>

        {/* <a onClick={handleClick} className="hero-btn">
          Mail me @
        </a> */}

        <a className="hero-btn2">
          <span>Download CV</span>

          <i className="fas fa-download"></i>
        </a>

        {/* <a
          href="path-to-your-cv.pdf" // Replace with the actual path to your CV
          className="hero-btn2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbFileCv />
        </a>

        <a
          href="https://github.com/your-github-username" // Replace with your GitHub profile link
          className="hero-btn3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/your-instagram-username" // Replace with your Instagram profile link
          className="hero-btn3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>*/}

        <a href="https://github.com/jyotiska222" className="hero-btn3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jyotiska-biswas-019b75290" className="hero-btn3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/jyotiskabiswas/" className="hero-btn3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/j_biswas0022" className="hero-btn3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>

      <div className="profilepicdiv">
        <img src={profilepic} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
