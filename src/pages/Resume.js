import React from 'react';
// import Footer from '../components/Footer';
import pdf from '../assets/files/Mimi-Resume-21.pdf';

function Resume() {
    return (
        <>
        <div>
          {/* RESUME */}
          <div className="resumeTitle">
            <div className="row">
              <h1 className="text-center"> R E S U M E</h1>
              <div className="text-center">
                <button type="button" className="btn resumeBtn text-center"><a href={pdf} className="resumeLInk text-center" target="_blank">download</a></button>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-4" />
              <div className="col-4">
                <h3 className="text-center mySkills mb-4 mt-3"> E M P L O Y M E N T</h3>
                <hr />
                <div className="text-center py-3">
                  <h5 className="fw-bolder">Project Manager</h5>
                  <p>Experian Partner Solutions - Austin, TX | July '21 - Present</p>
                </div>
                <div className="text-center py-3">
                  <h5 className="fw-bolder">Client Implementation Specialist</h5>
                  <p>Experian Partner Solutions - Austin, TX | Sept '20 - Jul '21 </p>
                </div>
                <div className="text-center py-3">
                  <h5 className="fw-bolder">Client Technical Analyst II</h5>
                  <p>Experian Partner Solutions - Austin, TX | Jun '19 - Sept '20</p>
                </div>
                <div className="text-center py-3">
                  <h5 className="fw-bolder">Client Technical Analyst I</h5>
                  <p>Experian Partner Solutions - Austin, TX | Jun '18 - Jun '19</p>
                </div>
                <div className="text-center py-3">
                  <h5 className="fw-bolder">Customer Care Supervisor</h5>
                  <p>Experian Partner Solutions - Austin, TX | Jan '17 - Jun '18</p>
                </div>
              </div>
              <div className="col-4" />
            </div>
          </div>

          <div className="container mt-3">
            <div className="row mySkills">
              <div className="col-2" />
              <div className="col-8">
                <h3 className="text-center fw-bold mb-4"> S K I L L S </h3>
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
          </>
      );
    };


export default Resume;