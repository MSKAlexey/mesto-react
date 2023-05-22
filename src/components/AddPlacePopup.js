import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddCard }) {

  const [name, setName] = React.useState({});
  const [link, setLink] = React.useState({});

  function handleSubmit(event) {
    event.preventDefault();
    onAddCard({name, link});
  }

  return (
    <PopupWithForm
      name={'add'}
      title={'Новое место'}
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="input-title"
        className="popup__input popup__input_type_title"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={e => setName(e.target.value)}
      />
      <span id="input-title-error" className="error"></span>
      <input
        id="input-link"
        className="popup__input popup__input_type_link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        onChange={e => setLink(e.target.value)}
      />
      <span id="input-link-error" className="error"></span>
    </PopupWithForm>
  )
}
export default AddPlacePopup;