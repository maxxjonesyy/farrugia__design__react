import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Footer.css";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ze3bmfc",
        "Default_Template",
        form.current,
        "iwCFiT7FYv44pEooo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    Swal.fire({
      icon: "success",
      title: "Your email has been sent!",
    });
  };

  return (
    <footer id="footer">
      <div className="footer__info__left">
        <h3>Get in touch:</h3>
        <p className="footer__number">0404 074 038</p>
        <p className="footer__email">sally@farrugiadesign.com.au</p>
      </div>
      <div className="footer__info__right">
        <h3>Studio:</h3>
        <p className="footer__address">
          Sydney // Bellingen
          <br />
          (BY APPOINTMENT ONLY)
        </p>
      </div>

      <form id="footer__contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__form__left">
          <input
            className="footer__contact__name"
            placeholder="Name *"
            name="name"
            type="text"
            required
          />
          <input
            className="footer__contact__email"
            placeholder="Email *"
            name="email"
            type="email"
            required
          />
        </div>

        <div className="contact__form__right">
          <textarea
            className="footer__contact__message"
            name="message"
            placeholder="Message:"
            required
          />
          <input
            type="submit"
            className="footer__contact__button"
            value="Send"
          />
        </div>
      </form>
    </footer>
  );
}

export default Footer;
