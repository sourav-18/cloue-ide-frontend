import React, { useEffect } from 'react';
import './css/Popup.css';

const Popup = ({ 
  isOpen = false,
  onClose,
  title,
  message,
  buttons = [{ label: 'OK', action: () => {}, type: 'primary' }],
  showCloseButton = true,
  overlayClickClose = true
}) => {
    console.log("enter")
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && overlayClickClose) {
      onClose();
    }
  };

  const handleButtonClick = (button) => {
    if (button.action) {
      button.action();
    }
    if (button.closeOnClick !== false) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            {showCloseButton && (
              <button className="modal-close" onClick={onClose}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          {/* Body */}
          <div className="modal-body">
            <p className="modal-message">{message}</p>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`modal-btn ${button.type || 'secondary'}`}
                onClick={() => handleButtonClick(button)}
                autoFocus={button.autoFocus}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;