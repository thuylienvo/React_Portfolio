import React from 'react';
import footLogo from '../assets/imgs/logo.png'

function Footer() {
    return (
        <>
        {/* FOOTER */}
        <div className="px-4 pb-5 footer">
            <footer>
                <div className="row">
                    <div className="col-3">
                     {/* <img src={footLogo} width="40px"/> */}
                    </div>
                    <div className="col-9 text-end">
                        <a href="https://github.com/thuylienvo" className="footlink px-2">github</a>
                        <a href="https://www.linkedin.com/in/mimi-vo/" className="footlink px-2">linkedIn</a>
                        <a href="mailto:mimzy414@gmail.com" className="footlink px-2">gmail</a>
                    </div>
                </div>
            </footer>
        </div>
        </>
      );
    };


export default Footer;