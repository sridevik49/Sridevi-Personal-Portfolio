import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k39atva",
        "template_ycjpk1p",
        form.current,
        "WjUD_nPing-nSsmgS"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container-wrapper">
      <section id="Contact" className="contact-section">
        <h2 className="section-title glow-text" data-aos="fade-down" data-aos-duration="1000">Get In Touch</h2>

        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form glass-panel" data-aos="zoom-in" data-aos-duration="1000">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required className="form-input" />
            </div>

            <div className="form-group">
              <input type="email" name="user_email" placeholder="Email Address" required className="form-input" />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="What's on your mind?"
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;