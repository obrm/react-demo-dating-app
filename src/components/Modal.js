import React from 'react';

const Modal = ({ isModalOpen, closeModal, message }) => {

  return (
    <div
      className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
    >
      <div className='modal-container'>
        <h2>Error</h2>
        <h3>{message && message.join(', ')}.</h3>
        <button className='btn close-modal-btn' onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
