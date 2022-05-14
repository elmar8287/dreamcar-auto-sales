import React, { useEffect, useState } from "react";
import {data} from "../../utils/localStorage";
import "./Contact.css";

function Contact() {
  // Get data from localStorage with condition of empty storage
  const getData = () => {
    const storeData = localStorage.getItem("data");
    if (!storeData) {
      return {
        name: "",
        email: "",
        message: "",
      };
    } else {
      return JSON.parse(storeData);
    }
  };
  // Setup state and monitor any updates of it.
  const [value, setValue] = useState(getData);
  useEffect(()=>{
    data(value);
  },[value]);
  
  const nameHandle = (e) => {
    setValue({...value, name: e.target.value});
  };
  const emailHandle = (e) => {
    setValue({...value, email: e.target.value});
  };
  const messageHandle = (e) => {
    setValue({...value, message: e.target.value});
  };
  const [submited, setSubmited] = useState(false);
  const submitedHandle = () => {
    setSubmited(true);
  };
  return (
  <div className="contact-form" id="contact">
    <h2>Leave your message</h2>
    <form action="https://formspree.io/f/mbjwjnay" method="POST" onSubmit={submitedHandle}>
      <input type="text" name="name" placeholder="Your name.." required value={value.name} onChange={nameHandle}/>
      <input type="email" name="email" placeholder="Your mail address.." required value={value.email} onChange={emailHandle}/>
      <textarea name="message" placeholder="Your message.." required value={value.message} onChange={messageHandle}/>
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
