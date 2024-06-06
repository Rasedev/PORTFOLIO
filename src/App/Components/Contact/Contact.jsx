import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
// import emailjs from "@emailjs/browser";
class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     this.form.current,
    //     "YOUR_USER_ID"
    //   )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  render() {
    return (
      <section id="contact">
        <div className="container">
        <h5>Get In Touch</h5>
        <h1>Contact Me<span className="color">.</span></h1>
        <div className="test contact__test p-5">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h6>russell233957@gmail.com</h6>
              <a href="mailto:russell233957@gmail.com">Send a message</a>
            </div>
            <div className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h6>Aminul Islam Russell </h6>
              <a href="https://m.me">Send a message</a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h6>+880 1717233957</h6>
              <a href="https://api.whatsapp.com/send?phone=880 1717233957">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
           <div className="button-container-4">
        <span className="contact_mas">CONTACT ME</span>
        <button type="button" name="Hover"></button>
      </div>
          </form>
        </div>
        </div>
        
      </section>
    );
  }
}

export default Contact;
