import React, { useRef } from "react";
import "./emailcontact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';


function Emailcontact() {
  const form = useRef()





  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aqbcjth', 'template_zrmlgxf', form.current, {
        publicKey: 'W3GedqysQTdzMG8h_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  }






  return (
    <div className="app-container">
      <div className="form-container">
        <div className="form-content">
          <div>
            <h1 className="form-title">Let's work together</h1>
            <p className="form-description">
            Let's collaborate to bring your ideas to life. Contact me for projects in Web development & frontend design
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-field"
                  name="from_name" required
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input-field"
                  name="user_email" required
                />
              </div>
              <div className="input-container">
                <textarea
                  placeholder="Type your message here."
                  className="textarea-field"
                  name="message" required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope info-icon"></i>
              <div>
                <p className="info-label">Email</p>
                <p className="info-text">j.biswas0022@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt info-icon"></i>
              <div>
                <p className="info-label">Address</p>
                <p className="info-text">Barrackpore, Kolkata 700122</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emailcontact;
