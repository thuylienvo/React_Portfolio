import React from 'react';

function Nav(props) {
  const tabs =['Home', 'About', 'Designs', 'Contact'];


  return (
    <>
    {/* NAVIGATION */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top px-3">
          <div className="container-fluid navPadding">
            <a className="navbar-brand" href="#"><img src="./assets/images/logo.png" className="navLogo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <ul classname="navbar-nav justify-content-end">
              {tabs.map(tab => (
                <li classname="nav-item" aria-current="page" key={tab}>
                  <a href={'#' + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                    classname={
                      props.currentPage === tab ? 'nav-link active text-end' : 'nav-link'
                    }>
                    {tab}
                  </a>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };

export default Nav;