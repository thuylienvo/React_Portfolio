import React from 'react';

function Footer() {
    return (
        <>
        {/* FOOTER */}
        <div className="px-4">
            <footer>
                <div className="row">
                    <div className="col-3">
                    <   img src="./assets/images/logo.png" width="40px" />
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