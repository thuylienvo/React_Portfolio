import React from 'react';
import iconImg from '../assets/imgs/logo.png'

function Nav(props) {
  const tabs =['Home', 'About', 'Designs', 'Resume','Contact'];


  return (
    <>
    {/* NAVIGATION */}
    <nav className="navbar navbar-expand-lg navbar-light sticky-top px-3">
        <div className="container-fluid navPadding">
          <a className="navbar-brand" href="#"><img src={iconImg} className="navLogo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-end">
              <ul className="navbar-nav justify-content-end">
                <a className="nav-link text-end active" aria-current="page" href="#">home</a>
                <a className="nav-link text-end" href="#">about</a>
                <a className="nav-link text-end" href="#">designs</a>
                <a className="nav-link text-end" href="#">contact</a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
    );
  };

export default Nav;