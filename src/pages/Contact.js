import React from 'react;' 
import ContactForm from '../components/ContactForm'


const Contact = () => {
    return (
        <>
        <div className="container">
            <div className="row text-center">
                <h3 className="fw-bold">Let's Create Something!</h3>
                <br />
                <p>Feel free to reach out if you’re looking for a developer, have a question, or just want to connect.
                </p>
            </div>
        </div>
        <ContactForm></ContactForm>
      </>
    );
  };

export default Contact;
