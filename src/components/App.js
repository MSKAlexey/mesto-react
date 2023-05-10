import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className='page'>

      <div className='page__container'>
        <Header />
        <Main
          handleEditAvatarClick={() => {
            document.querySelector('.popup_avatar').classList.add('popup_opened')
          }
          }
          handleEditProfileClick={() => {
            document.querySelector('.popup_edit').classList.add('popup_opened')
          }
          }
          handleAddPlaceClick={() => {
            document.querySelector('.popup_add').classList.add('popup_opened')
          }
          }
        />
        <Footer />
      </div>

      {/* редактирование аватара */}
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
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

      {/* template */}
      <template className='template' id='template'>
        <li className='cards__item'>
          <button type='button' className='cards__trash cursor'></button>
          <img src='#' alt='' className='cards__image' />
          <div className='cards__title-icon'>
            <h2 className='cards__title'>3</h2>
            <div className='cards_like-count'>
              <button type='button' className='cards__icon cursor'></button>
              <div className='cards__count'>0</div>
            </div>
          </div>
        </li>
      </template>

    </div >
  );
}

export default App;