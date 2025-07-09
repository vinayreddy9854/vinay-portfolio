import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("SERVICE:", process.env.REACT_APP_EMAILJS_SERVICE_ID);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);

    const data = {
      name,
      email,
      subject,
      message,
    };

    console.log("Sending email with values:", {
      service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_API,
      data
    });
    

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_API
    )
    .then(() => {
      setLoading(false);
      toast.success("Email sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    })
    .catch((error) => {
      setLoading(false);
      console.error("EmailJS Error:", error);
      toast.error("Failed to send email. Please try again.");
    });
    
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let’s connect and collaborate!</h3>
          <p className="contact__details">
            Feel free to reach out by email or via my professional profiles:
          </p>

          <ul className="contact__links">
            <li>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:vinayreddy9854@gmail.com">
                vinayreddy9854@gmail.com
              </a>
            </li>
            <li>
              💼 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/vinay-reddy-"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vinay-reddy-
              </a>
            </li>
            <li>
              🧑‍💻 <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/vinayreddy9854"
                target="_blank"
                rel="noreferrer"
              >
                github.com/vinayreddy9854
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact__form-input"
              placeholder="Write your message"
              rows="10"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={loading}>
             {loading ? "Sending..." : "Send Message"}
            </button>

        </form>

        <ToastContainer position="bottom-right" theme={props.theme || "light"} />
      </div>
    </section>
  );
};

export default Contact;



