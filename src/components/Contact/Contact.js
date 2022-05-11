import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputHandle = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const [submited, setSubmited] = useState(false);
  const submitedHandle = () => {
    setSubmited(true);
  };
  return (
  <div className="contact-form" id="contact">
    <h2>Leave your message</h2>
    <form action="https://formspree.io/f/mbjwjnay" method="POST" onSubmit={submitedHandle}>
      <input type="text" name="name" placeholder="Your name.." required value={value.name} onChange={inputHandle}/>
      <input type="email" name="email" placeholder="Your mail address.." required value={value.email} onChange={inputHandle}/>
      <textarea name="message" placeholder="Your message.." required value={value.message} onChange={inputHandle}/>
      <input type="submit" value="Send"/>
      {
        submited ? 
        <div className="sent-message">
          Message successfully sent
        </div>
        :
        null
      }
    </form>
  </div>
  );
}

export default Contact;
