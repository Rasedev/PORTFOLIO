// import { Component, createRef } from "react";
// import "./contact.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
// import { RiWhatsappLine } from "react-icons/ri";
// import emailjs from "@emailjs/browser";
// import Button from "../Button/Button";


// class Contact extends Component {
//   constructor() {
//     super();
//     this.form = createRef();
//   }
//   sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         this.form.current,
//         "YOUR_USER_ID"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }
//   render() {
//     return (
//       <section id="contact">
//         <div className="container">
//         <h5 className="font-Hat">Get In Touch</h5>
//         <h1 className="font-Hat">Contact Me<span className="color">.</span></h1>
//         <div className="test contact__test p-5">
//           <div className="contact__options">
//             <div className="contact__option">
//               <MdOutlineEmail className="contact__option-icon" />
//               <h4 className="font-Hat text-[1rem] font-medium">Email</h4>
//               <h6 className="font-Hat text-[1rem] font-medium">russell233957@gmail.com</h6>
//               <a className="font-Hat" href="mailto:russell233957@gmail.com">Send a message</a>
//             </div>
//             <div className="contact__option">
//               <RiMessengerLine className="contact__option-icon" />
//               <h4 className="font-Hat text-[1rem] font-medium">Messenger</h4>
//               <h6 className="font-Hat text-[1rem] font-medium">Aminul Islam Russell </h6>
//               <a className="font-Hat" href="https://m.me">Send a message</a>
//             </div>
//             <div className="contact__option">
//               <RiWhatsappLine className="contact__option-icon" />
//               <h4 className="font-Hat text-[1rem] font-medium">Whatsapp</h4>
//               <h6 className="font-Hat text-[1rem] font-medium">+880 1717233957</h6>
//               <a className="font-Hat " href="https://api.whatsapp.com/send?phone=880 1717233957">
//                 Send a message
//               </a>
//             </div>
//           </div>
//           <form ref={this.form} onSubmit={this.sendEmail} action="">
//             <input
//             className="font-Hat text-white"
//               type="text"
//               name="name"
//               placeholder="Your Full Name"
//               required
//             />
//             <input
//             className="font-Hat text-white"
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />
//             <textarea
//             className="font-Hat text-white"
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               required
//             ></textarea>
//             <Button
//               title="CONTACT ME"
//               onClick={() => alert("Button clicked!")}
//               width="200px"
//               height="50px"
//               className="contact-button-class"
//               style={{ backgroundColor: "transparent", borderRadius: '0px', position:'relative',top:'10%',left:'14%' }}
//             />
      
//           </form>
//         </div>
//         </div>
       
//       </section>
//     );
//   }
// }

// export default Contact;



import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      inputColor: "transparent", // initial color
    };
    this.form = createRef();
    this.firstInputRef = createRef();
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this.form.current,
        "YOUR_USER_ID"
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
  }

  handleButtonClick = () => {
    this.setState({ inputColor: "white" });
    this.firstInputRef.current.focus();
  };

  render() {
    return (
      <section id="contact">
        <div className="container">
          <h5 className="font-Hat">Get In Touch</h5>
          <h1 className="font-Hat">
            Contact Me<span className="color">.</span>
          </h1>
          <div className="test contact__test p-5">
            <div className="contact__options">
              <div className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4 className="font-Hat text-[1rem] font-medium">Email</h4>
                <h6 className="font-Hat text-[1rem] font-medium">
                  russell233957@gmail.com
                </h6>
                <a className="font-Hat" href="mailto:russell233957@gmail.com">
                  Send a message
                </a>
              </div>
              <div className="contact__option">
                <RiMessengerLine className="contact__option-icon" />
                <h4 className="font-Hat text-[1rem] font-medium">Messenger</h4>
                <h6 className="font-Hat text-[1rem] font-medium">
                  Aminul Islam Russell
                </h6>
                <a className="font-Hat" href="https://m.me">
                  Send a message
                </a>
              </div>
              <div className="contact__option">
                <RiWhatsappLine className="contact__option-icon" />
                <h4 className="font-Hat text-[1rem] font-medium">Whatsapp</h4>
                <h6 className="font-Hat text-[1rem] font-medium">
                  +880 1717233957
                </h6>
                <a
                  className="font-Hat "
                  href="https://api.whatsapp.com/send?phone=880 1717233957"
                >
                  Send a message
                </a>
              </div>
            </div>
            <form ref={this.form} onSubmit={this.sendEmail} action="">
              <input
                ref={this.firstInputRef}
                className="font-Hat text-white rounded-sm"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                style={{ backgroundColor: this.state.inputColor }}
              />
              <input
                className="font-Hat text-white"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="font-Hat text-white"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <Button
                title="CONTACT ME"
                onClick={this.handleButtonClick}
                width="200px"
                height="50px"
                className="contact-button-class"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "0px",
                  position: "relative",
                  top: "10%",
                  left: "14%",
                }}
              />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;


