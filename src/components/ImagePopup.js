import React from 'react';

function ImagePopup({ onClose, isOpen, card }) {

  function handleOverlayClosePopups(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  // внутри указываем `useEffect` для обработчика `Escape`
  React.useEffect(() => {
    // ограничиваем навешивание обработчика: если не открыт, то не нужно навешивать
    if (!isOpen) return;
    // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)
    // обязательно удаляем обработчик в `clean-up` функции
    return () => document.removeEventListener('keydown', closeByEscape)
    // обязательно следим за `isOpen`, чтобы срабатывало только при открытии, а не всегда
  }, [isOpen, onClose])

  return (
    <div
      className={isOpen ? `popup popup_img  popup_opened` : `popup popup_img`}
      onClick={handleOverlayClosePopups}
    >
      <div className='popup__content'>
        <button
          type='button'
          className='popup__close cursor'
          onClick={onClose}
        ></button>
        <img
          src={card.link}
          alt={card.name}
          className='popup__image'
        />
        <h2 className='popup__name'>{card.name}</h2>
      </div>
    </div>
  )
}
export default ImagePopup;