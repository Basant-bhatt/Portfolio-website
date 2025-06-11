import React, { useRef } from "react";
import "./contact.css";

import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pkpc21i', 'template_jlst8ai', form.current, {
        publicKey: 'WU0MXO0nGH01YTVAO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    

      <section className="contactsection">
        <h1 className="contacttitle">Contact me</h1>
        <span className="contactdesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactform"  ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name"  name="your_name"/>
          <input type="email" className="email" placeholder="Your Email" name="your_email"/>
          <textarea name="message" rows={"5"} placeholder="Your Message" className="message"></textarea>
          <button className="submitbtn" type="submit" value={"send"}>Submit</button>
          <div className="links">
            <i className="fa-brands fa-instagram link"></i>
            <i class="fa-brands fa-x-twitter link"></i>
            <i class="fa-brands fa-youtube link "></i>
            <i class="fa-brands fa-facebook-f link"></i>
          </div>
        </form>
      </section>
    
  );
}

export default Contact;
