import React from "react";
import "../componentCss/ToastNotificationCss.css";

function ToastNotification({ message, onClose, isDeleted }) {
  
  return (
    <div className={`toast-notification ${isDeleted ? 'color-red' : 'color-green'}`}>
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
}

export default ToastNotification;
