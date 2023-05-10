import userAvatar from '../images/profile-image.jpg';
import PopupWithForm from './PopupWithForm';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector(".popup_avatar").classList.add("popup_opened")
  };

  function handleEditProfileClick() {
    document.querySelector(".popup_edit").classList.add("popup_opened")
  };

  function handleAddPlaceClick() {
    document.querySelector(".popup_add").classList.add("popup_opened")
  };

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__pencil">
            <img className="profile__image cursor" src={userAvatar} alt="Аватар пользователя" onClick={handleEditAvatarClick} />
          </div>
          <div className="profile__content">
            <div className="profile__name-buttom">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__popup-open opacity cursor" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" className="profile__vector opacity cursor" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="places">
          <ul className="cards"></ul>
        </section>
      </main>
      {/* редактирование аватара */}
      <PopupWithForm />
      {/* <div className="popup popup_avatar" id="popup_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_avatar" action="#" method="get" name="avatar" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              id="input-link-type-avatar"
              className="popup__input popup__input_type_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required />
            <span id="input-link-type-avatar-error" className="error"></span>
            <button type="submit" name="button" className="popup__button cursor">Сохранить</button>
          </form>
        </div>
      </div> */}
      {/* редактирование профиля */}
      <div className="popup popup_edit" id="popup_edit">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_edit" action="#" method="get" name="edit" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button type="submit" name="button" className="popup__button cursor">Сохранить</button>
          </form>
        </div>
      </div>
      {/* добавление карточки */}
      <div className="popup popup_add" id="popup_add">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_add" action="#" method="get" name="add" noValidate>
            <h2 className="popup__title">Новое место</h2>
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
            <button type="submit" name="button" className="popup__button cursor">Создать</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Main;