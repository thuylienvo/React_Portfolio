import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const ContactForm = () => {
    // const [userFormData, setUserFormData] = useState({
    //   name: "",
    //   email: "",
    //   message:"",
    // });

    // const [errors, setErrors] = useState(false);


    // function handleChange(e) {
    //     e.preventDefault();

    //     if (e.target.value === "") {
    //         document.getElementsByName.apply(e.target.name)[0].classList.add('invalid');
    //     } else {
    //         document.getElementsByName(e.target.name)[0]
    //         .classList.remove('invalid');
    //     }
    // }

    // function onSubmit(e) {
    //     e.preventDefault();

    //     const errors =document.getElementsByClassName('invalid');

    //     if(errors > 0) {
    //         setErrors(true);
    //     } else setErrors(false);
    // }

    return (
        <div className="container">
        <div className="row">
        <div className="col-3" />
        <div className="col-6">
            <form>
            <div className="mb-3">
                <label htmlFor="fname" className="form-label">name</label>
                <input type="text" className="form-control" id="yourName" aria-describedby="nameHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">message</label>
                <input type="text" className="form-control messageBody" id="Message" aria-describedby="messageHelp"/>
            </div>
            <div className="text-end">
            <button type="submit" className="btn btn-light text-center justify-content-end">s u b m i t</button>
            </div>
            </form>
        </div>
        <div className="col-3" />
        </div>
    </div>
);
}



export default ContactForm;