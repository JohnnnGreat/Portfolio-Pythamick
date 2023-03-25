import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="s-m">
          <div className="line"></div>
          <h1 data-aos="fade-up" data-duration="1000">
            Connect With Me
          </h1>
        </div>
        <h1 className="main-t">Say Hello</h1>
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <textarea cols="30" rows="10">
            Have something in mind? send us a message
          </textarea>
          <div className="btn-d">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
