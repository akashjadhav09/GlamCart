import React from "react";
import "../componentCss/ToastNotificationCss.css";

function ToastNotification({ message, onClose, isDeleted, isAlreadyInCart }) {
  
  return (
    <div className={`toast-notification ${isDeleted ? 'color-red' : 'color-green'} ${isAlreadyInCart ? 'color-orange' : ''}`}>
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
}

export default ToastNotification;
