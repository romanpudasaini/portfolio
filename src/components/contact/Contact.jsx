/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="cleft">
        <img className="cimg" src="assets/shake.svg" alt="" />
      </div>
      <div className="cright">
        <h2 className="ch2">Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span className="cspan">
              Thanks, I'll reply You letter. Have a nice day !!!!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
