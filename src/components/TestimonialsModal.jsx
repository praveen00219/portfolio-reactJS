import React from "react";

const TestimonialsModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null; // Modal is only visible if `isOpen` is true

  return (
    <div className="modal-container active" data-modal-container>
      <div className="overlay" onClick={onClose}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={content.avatar} alt={content.name} width="80" />
          </figure>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icon-quote.svg`}
            alt="quote icon"
          />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{content.name}</h4>
          <time>{content.date}</time>
          <p>{content.text}</p>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsModal;
