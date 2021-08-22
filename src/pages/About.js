import React from 'react';
import mimiImg2 from '../assets/imgs/mimi-square.jpeg'

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1" />
          <div className="col-4">
            <img src={mimiImg2} alt="me again" height="50%" className="img-fluid" />
          </div>
          <div className="col-6">
            <h3 className="title fw-bold">About Me</h3>
            <p className="firstP">
              Howdy! My name is, <span className="name fw-bolder fs-5">Mimi Vo</span>, and I am full stack web developer in training. <br /><br /> Originally from Autun, France, my family moved to states when I was about 4 years old. Currently, I live and work in beautiful Austin, TX where I am Project Manaher at Experian Partner Solutions. I am taking the UT boot camp in order to gain new skills to be more well rounded in my current position and in hopes of owning my own design business. Thank you MySpace for introducing me to my first set of code!
              <br />
              <br />
              In my spare time, you'll find me hanging out with family at the local park, dining at some new hot spot, reading a thriller, watching some binge-able shows and baking. My creative outlet is managing a small macaron side business where I get to spill my passion for food into little sugar treats.
              <br />
              <br />
              <span className="fw-bolder">Check out some of my (ninja) skills!</span>
            </p>
          </div>
          <div className="col-1" />
        </div>
      </div>
      {/* Skills */}
      <div className="container">
        <div className="row mySkills">
          <div className="col-2" />
          <div className="col-8">
            <h3 className="text-center fw-bold mb-4"> My Skills </h3>
            <hr className="my-4 lineBreak" />
          </div>
          <div className="col-2" />
        </div>
        <div className="row text-center">
          <div className="col-3" />
          <div className="col-2">
            <ul className="text-start skillsList">
              <li>CSS</li>
              <li>Express</li>
              <li>HTML</li>
              <li>Illustrator</li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="text-start skillsList">
              <li>Javascript (ES6+)</li>
              <li>jQuery</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="text-start skillsList">
              <li>MySQL</li>
              <li>Node.js</li>
              <li>Photoshop</li>
              <li>SQL</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div className="col-3" />
        </div>
      </div></div>
    );
  };

export default About;