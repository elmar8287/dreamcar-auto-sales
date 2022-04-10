import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact-form" id="contact">
    <h2>Leave your message</h2>
    <form action="https://formspree.io/f/mbjwjnay" method="POST">
      <input type="text" name="name" placeholder="Your name.." required />
      <input type="text" name="email" placeholder="Your mail address.." required />
      <textarea name="message" placeholder="Write something.." required/>
      <input type="submit" value="Send" />
    </form>
  </div>
);

export default Contact;
