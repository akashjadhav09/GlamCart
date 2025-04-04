import React from "react";
import "../componentCss/ToastNotificationCss.css";

function ToastNotification({ message, onClose }) {
  return (
    <div className="toast-notification">
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>✖</button>
    </div>
  );
}

export default ToastNotification;
