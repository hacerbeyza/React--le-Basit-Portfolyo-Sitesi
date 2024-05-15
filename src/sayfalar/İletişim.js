import React, { useState } from 'react';
import resim4 from "../img/8.png";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  
    console.log('İsim:', name);
    console.log('E-posta:', email);
    console.log('Mesaj:', message);


  };

  return (
    <div className="contact-page">
      <br></br><br></br><br></br><br></br>
      <h2>Bize Bir Mesaj Bırakın</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Adınız:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta Adresiniz:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Konu:</label>
          <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mesajınız:</label>
          <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>

        <button type="submit">Gönder</button>
      </form>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <img src={resim4} alt="resim" />
    </div>
  );
};

export default ContactPage;