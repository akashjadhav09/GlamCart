import React from "react";
import { FaShippingFast, FaHeadset, FaUndoAlt } from "react-icons/fa";

import "./../componentCss/serviceCardCss.css"; 

const serviceData = [
  {
    icon: <FaShippingFast className="icon" />,
    title: "Free Delivery",
    description: "Enjoy free shipping on all orders with no minimum purchase.",
  },
  {
    icon: <FaHeadset className="icon" />,
    title: "24/7 Support",
    description: "We are available around the clock to assist you anytime.",
  },
  {
    icon: <FaUndoAlt className="icon" />,
    title: "Money-Back Guarantee",
    description: "100% money-back guarantee within 10 days of purchase.",
  },
];

const ServiceCard = () => {
  return (
    <div className="service-container">
      {serviceData.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon-wrapper">{service.icon}</div>
          <h3 className="title">{service.title}</h3>
          <p className="description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
