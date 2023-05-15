import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setImagePopupOpen(true);
    setselectedCard(card)
    console.log(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className='page'>

      <div className='page__container'>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      {/* редактирование аватара */}
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id='input-link-type-avatar'
          className='popup__input popup__input_type_link'
          type='url'
          name='link'
          placeholder='Ссылка на картинку'
          required />
        <span id='input-link-type-avatar-error' className='error'></span>
      </PopupWithForm>
      {/* редактирование профиля */}
      <PopupWithForm
        name={'edit'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-name"
          className="popup__input popup__input_type_name"
          placeholder="Введите имя"
          type="text"
          name="title"
          minLength="2"
          maxLength="40"
          required />
        <span id="input-name-error" className="error"></span>
        <input
          id="input-about"
          className="popup__input popup__input_type_about"
          placeholder="Введите род деятельности"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          required />
        <span id="input-about-error" className="error"></span>
      </PopupWithForm>
      {/* добавление карточки */}
      <PopupWithForm
        name={'add'}
        title={'Новое место'}
        buttonText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-title"
          className="popup__input popup__input_type_title"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required />
        <span id="input-title-error" className="error"></span>
        <input
          id="input-link"
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required />
        <span id="input-link-error" className="error"></span>
      </PopupWithForm>
      {/* удаление карточки */}
      <PopupWithForm
        name={'remove'}
        title={'Вы уверены?'}
        buttonText={'Да'}
      />
      {/* открытие картинки */}
      <ImagePopup />
      onClose={closeAllPopups}
      isOpen={isImagePopupOpen}
      {/* card={selectedCard} */}
    </div >
  );
}

export default App;