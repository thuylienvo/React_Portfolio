import React from 'react';
import misoImg from '../assets/imgs/miso.png'
import movieImg from '../assets/imgs/moviemixer.png'
import beyondImg from '../assets/imgs/beyond.png'
import quizImg from '../assets/imgs/quiz.png'
import scheduleImg from '../assets/imgs/scheduler.png'
import portfolioImg from '../assets/imgs/portfolio.png'

function Projects() {
    return (
            <div>
              <div className="container homeSneak mb-4 mt-4">
                <div className="row ">
                  <div className="col-2" />
                  <div className="col-3">
                    <h3>movie mixer</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={movieImg} className="card-img-top round" alt="moviemixer" />
                    </div>
                    <p className="text-end"><a href="https://github.com/thuylienvo/MovieMixer" className="projectLinks" target="_blank">github </a>
                      | <a href="https://rtanguyen.github.io/MovieMixer/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  <div className="col-3">
                    <h3>miso hungry</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={misoImg} className="card-img-top round" alt="miso" />
                    </div>
                    <p className="text-end"><a href="https://github.com/thuylienvo/miso-hungry" className="projectLinks" target="_blank">github </a>
                      | <a href="https://intense-temple-14332.herokuapp.com/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  <div className="col-3">
                    <h3>beyond us</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={beyondImg} className="card-img-top round" alt="beyond" />
                    </div>
                    <p className="text-end"><a href="https://github.com/rtanguyen/beyond-us" className="projectLinks" target="_blank">github </a>
                      | <a href="https://young-taiga-79587.herokuapp.com/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  {/* <div className="col-1"></div> */}
                </div>
              </div>
              <div className="container homeSneak mb-4 mt-4">
                <div className="row">
                  <div className="col-2" />
                  <div className="col-3">
                    <h3>code quiz</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={quizImg} className="card-img-top round" alt="codequiz" />
                    </div>
                    <p className="text-end"><a href="https://github.com/thuylienvo/JSCocoCodeQuizzle" className="projectLinks" target="_blank">github </a>
                      | <a href="https://thuylienvo.github.io/JSCocoCodeQuizzle/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  <div className="col-3">
                    <h3>portfolio</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={portfolioImg} className="card-img-top round" alt="portfolio" />
                    </div>
                    <p className="text-end"><a href="https://github.com/thuylienvo/portfolio" className="projectLinks" target="_blank">github </a>
                      | <a href="https://thuylienvo.github.io/portfolio/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  <div className="col-3">
                    <h3>day scheduler</h3>
                    <div className="card projectCards" style={{maxWidth: '18rem'}}>
                      <img src={scheduleImg} className="card-img-top round" alt="scheduler" />
                    </div>
                    <p className="text-end"><a href="https://github.com/thuylienvo/Werk-Sched" className="projectLinks" target="_blank">github </a>
                      | <a href="https://thuylienvo.github.io/Werk-Sched/" className="projectLinks" target="_blank">deployed</a></p>
                  </div>
                  {/* <div className="col-1"></div> */}
                </div>
              </div>
            </div>
          );
        };

export default Projects;