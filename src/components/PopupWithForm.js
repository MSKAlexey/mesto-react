import React from 'react';

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose, onSubmit }) {

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
      className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}
      onClick={handleOverlayClosePopups}
    >
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close cursor'
          onClick={onClose}
        ></button>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={name}
          onSubmit={onSubmit}
        >
          <h2 className='popup__title'>{title}</h2>
          {children}
          <button
            type='submit'
            name='button'
            className='popup__button cursor'
          >{buttonText}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;