import React from 'react';
import { IoMdClose } from 'react-icons/io';

export default function CustomModal({ onClose, message, handleOkButtonClick, iconName:Icon, buttonText }) {

  return (
    <div className=''>
      <div 
        onClick={(e) => e.stopPropagation()}
        id="place-order-modal"
        className='place-order-modal__outer bg-white h-1/2 rounded shadow-lg relative p-4 m-4 z-50'>
        <div className='flex justify-end border-b border-gray-300 pb-1 cursor-pointer' onClick={onClose}>
          <IoMdClose className='text-2xl text-gray-700' />
        </div>
        <div className='tick-mak-icon-wrapper flex items-center justify-center my-2 md:my-4 text-[60px]'>
            <Icon className='order-placed-tick-mark bg-blue-600 text-white rounded-full' />
        </div>
        <div className='text-lg mb-2 md:my-4 text-center'>
          {message}
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleOkButtonClick}
            className='px-4 py-2 md:my-1 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            {buttonText || "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
}
