import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsModal = ({ isOpen, onClose, content }) => {
  const safeContent = content || { avatar: "", name: "", date: "", description: "" };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-container active"
          data-modal-container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="overlay active"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.section
            className="testimonials-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={safeContent.avatar}
                  alt=""
                  className="modal-avatar py-2"
                  width="80"
                />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{safeContent.name}</h4>
              <time>{safeContent.date}</time>
              <p>{safeContent.description}</p>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialsModal;
