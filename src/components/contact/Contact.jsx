import "./contact.scss";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { EmailOutlined, PhoneOutlined, PinOutlined } from "@mui/icons-material";

export default function Contact() {
  const formRef = useRef();
  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForm = async () => {
    try {
      setLoading(true);
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_KEY,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAIL_USER_ID
      );
      setLoading(false);
      setIsDone(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <div className="contact">
      <div className="left">
        <h1 className="contact-title">Parlons de votre future projet</h1>
        <div className="contact-infos">
          <p className="contact-info">
            <PhoneOutlined className="contact-icon" />
            <span>+33 6 24 35 41 76</span>
          </p>
          <p className="contact-info">
            <EmailOutlined className="contact-icon" />
            <span>xand974@gmail.com</span>
          </p>
          <p className="contact-info">
            <PinOutlined className="contact-icon" />
            <span>259 voie domitienne, Montpellier 34090</span>
          </p>
        </div>
      </div>
      <div className="right">
        <h2 className="contact-accroche">
          Toute proposition sera analysé et un devis sera effectué sur-mesure
        </h2>
        <form onSubmit={(e) => e.preventDefault()} ref={formRef}>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_mail" id="email" />
          </div>
          <div className="form-input">
            <label htmlFor="sujet">Sujet</label>
            <input type="text" name="user_subject" id="sujet" />
          </div>
          <textarea name="message" placeholder="votre message"></textarea>
          <button
            disabled={loading}
            onClick={() => handleForm()}
            className="form-btn"
          >
            Envoyer
          </button>
        </form>
        {isDone && (
          <span>
            Merci, votre demande sera traité dans les meilleurs délais
          </span>
        )}
      </div>
    </div>
  );
}
