import React from 'react';
import './Home.css';
import Social from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import vinay1Img from '../../assets/avatar5.png';

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
      <img src={vinay1Img} alt="Vinay Reddy" className="home__img" />


        <h1 className="home__name">VINAY REDDY BOLLA</h1>
        <span className="home__education">
          Full Stack Developer | Machine Learning Enthusiast | Product-Focused Engineer
        </span>

        <Social />

        <div className="home__btns">
          <a download href="/VINAY REDDY BOLLA_RESUME.pdf" className="btn">
            Download Resume
          </a>

          <a href="#contact" className="btn btn--transparent">
            Contact Me
          </a>
        </div>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}

export default Home;
