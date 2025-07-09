import React from 'react';
import './About.css';
import vinayImg from '../../assets/Vinay.jpeg';
import AboutBox from "./AboutBox";



const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={vinayImg}  alt="Vinay Reddy" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I am a Computer Science Engineering graduate with strong foundations in full-stack web and mobile development, data science, and product-focused engineering. I’ve built multiple real-world applications, including a financial fraud detection system, crypto price forecasting tool, and a business discovery platform.
            <br /><br />
            I specialize in React, Flutter, Firebase, Python, Java and machine learning. I enjoy solving real-world problems through code and turning ideas into useful digital products.
          </p>
          <AboutBox />
         <br></br>

          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

