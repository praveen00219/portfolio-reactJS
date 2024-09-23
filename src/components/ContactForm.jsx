import React, { useState, useEffect } from "react";

const ContactForm = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Form validation state
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form on every change
  useEffect(() => {
    const isNameValid = formData.name.trim().length > 0;
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email); // email regex
    const isMessageValid = formData.message.trim().length > 0;

    // Set form validity
    setIsFormValid(isNameValid && isEmailValid && isMessageValid);
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Console the user data
      console.log("Form Submitted:", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228975.03489132784!2d72.86573209839574!3d26.270265320732502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1726673298269!5m2!1sen!2sin"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form onSubmit={handleSubmit} className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                data-form-input
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                data-form-input
              />
            </div>
            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              data-form-input
            ></textarea>
            <button className="form-btn" type="submit" disabled={!isFormValid}>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactForm;
