import React, { useState } from 'react';
import './whatsAppChat.scss';

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const whatsappNumber = '12345555555'; // Ваш номер WhatsApp у міжнародному форматі
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="whatsapp-chat">
      <button className="button button--wp" onClick={toggleChat}>
        Чат в WhatsApp
      </button>
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-modal__header">
            <h3>Напишіть нам у WhatsApp</h3>
            <button className="chat-modal__close" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-modal__body">
            <textarea
              placeholder="Ваше повідомлення"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-modal__input"
            />
            <button className="chat-modal__send" onClick={handleSendMessage}>
              Надіслати
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
